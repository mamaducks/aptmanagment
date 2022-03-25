import { atom, selector } from "recoil";
import { applicantsMap } from "./applicants";
import { tenantsData } from "./data/tenants";
import { compact } from "lodash";

export const tenants = atom({
  key: "_tenants",
  default: tenantsData,
});

export const siteUnitTenantWithApplicantMap = selector({
  key: "_siteUnitTenantMap",
  get: ({ get }) => {
    const applicantsInfo = get(applicantsMap);

    const tenantsWithApplicantInfo = compact(
      get(tenants).map((item) => {
        const applicant = applicantsInfo.get(item.applicantId);

        if (!applicant) {
          return undefined;
        }

        return { ...item, applicant };
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
