import { atom, selector, selectorFamily } from "recoil";
import {
  applicants,
  getApplicantsMap,
  getApplicantsWithNameMap,
} from "./applicants";
import { tenantsData } from "./data/tenants";
import { compact } from "lodash";
import { getTenantRentsMap } from "./rents";
import { getTenantPaymentsMap } from "./payments";
import { getSitesWithTenant } from "./sites";
import { DAY } from "./data/reference";
import { updateState } from "./helpers/dataHelpers";
import { APPLICANT_STATUS_MAP } from "./data/applicants";
import { localStorageEffect } from "./localStorageEffect";

const RENEWAL_DAYS = DAY * 60;

export function getTenantId({ siteId, unitId, applicantId }) {
  return `${siteId}-${unitId}-${applicantId}`;
}

export const tenants = atom({
  key: "_tenants",
  default: [],
  effects_UNSTABLE: [localStorageEffect("_tenants", tenantsData)],
});

export const getTenantsWithId = selector({
  key: "_getTenantsWithId",
  get: ({ get }) =>
    get(tenants).map((item) => ({
      tenantId: getTenantId(item),
      ...item,
    })),
});

export const getTenantsMap = selector({
  key: "getTenantsMap",
  get: ({ get }) =>
    new Map(get(getTenantsWithId).map((item) => [item.tenantId, item])),
});

export const getSiteUnitTenantWithApplicantMap = selector({
  key: "_getSiteUnitTenantWithApplicantMap",
  get: ({ get }) => {
    const applicantsInfo = get(getApplicantsWithNameMap);

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

export const getTenantsSummaryInfo = selector({
  key: "_getTenantsSummaryInfo",
  get: ({ get }) =>
    get(getSitesWithTenant)
      .map((site) => {
        const { units } = site;

        return units
          .filter((item) => !!item.tenant)
          .map((item) => ({
            ...item.tenant,
            siteName: item.siteName,
            unitId: item.unitId,
          }));
      })
      .flat(),
});

export const getUpcomingRenewalTenantsSummaryInfo = selector({
  key: "_getUpcomingRenewalTenantsSummaryInfoo",
  get: ({ get }) =>
    get(getTenantsSummaryInfo)
      .filter(
        (tenantInfo) => tenantInfo?.dateRenewal < Date.now() + RENEWAL_DAYS
      )
      .flat(),
});

export const getTenantFormData = selectorFamily({
  key: "getTenantFormData",
  get:
    ({ siteId, unitId, applicantId }) =>
    ({ get }) =>
      get(getTenantsMap).get(getTenantId({ siteId, unitId, applicantId })) || {
        dateMoveIn: Date.now(),
        siteId,
        unitId,
        applicantId,
      },
  set:
    () =>
    ({ get, set }, newItem) => {
      console.log("newItem", newItem);

      const tenantId = getTenantId(newItem);

      const newTenantState = updateState(
        get(tenants),
        (item) => getTenantId(item) === tenantId,
        newItem,
        false
      );

      const currentApplicant = get(getApplicantsMap).get(newItem.applicantId);

      if (!currentApplicant) {
        console.error("Applicant not found", newItem);
      }

      const applicant = { ...currentApplicant };

      if (
        !!newItem.dateMoveIn &&
        applicant.applicantStatus !== APPLICANT_STATUS_MAP.Placed
      ) {
        applicant.applicantStatus = APPLICANT_STATUS_MAP.Placed;
        applicant.notes = `${applicant.notes || ""} PLACED ${newItem.siteId}-${
          newItem.unitId
        } on ${new Date(newItem.dateMoveIn).toLocaleDateString()}`;
      } else if (
        !newItem.dateMoveIn &&
        applicant.applicantStatus === APPLICANT_STATUS_MAP.Placed
      ) {
        applicant.applicantStatus = APPLICANT_STATUS_MAP.Applied;
      }

      const newApplicantsState = updateState(
        get(applicants),
        (item) => item.applicantId === newItem.applicantId,
        applicant,
        false
      );

      set(applicants, newApplicantsState);
      set(tenants, newTenantState);

      // console.log(newTenantState, newApplicantsState);
    },
});
