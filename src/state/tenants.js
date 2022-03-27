import { atom, selector } from "recoil";
import { getApplicantsMap } from "./applicants";
import { tenantsData } from "./data/tenants";
import { compact } from "lodash";
import { getTenantRentsMap } from "./rents";
import { getTenantPaymentsMap } from "./payments";


export const tenants = atom({
  key: "_tenants",
  default: tenantsData,
});

export const getTenantsWithId = selector({
  key: "_getTenantsWithId",
  get: ({ get }) =>
    get(tenants).map((item) => ({
      tenantId: `${item.siteId}-${item.unitId}-${item.applicantId}`,
      ...item,
    })),
});
//
export const getSiteUnitTenantWithApplicantMap = selector({
  key: "_getSiteUnitTenantWithApplicantMap",
  get: ({ get }) => {
    const applicantsInfo = get(getApplicantsMap);

    const tenantsWithApplicantInfo = compact(
      get(getTenantsWithId).map((item) => {
        const applicant = applicantsInfo.get(item.applicantId);

        if (!applicant) {
          return undefined;
        }

        const rents = get(getTenantRentsMap).get(item.tenantId) || [];
        const payments = get(getTenantPaymentsMap).get(item.tenantId) || [];

        return { ...item, ...applicant, payments, rents };
      })
    );

    return new Map(
      tenantsWithApplicantInfo.map((item) => [
        `${item.siteId}-${item.unitId}`,
        item,
      ])
    );
  },
});

