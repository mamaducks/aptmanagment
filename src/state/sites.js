import { atom, selector, selectorFamily } from "recoil";
import { sitesWithUnitsData } from "./data/sitesWithUnits";
import { getSiteUnitTenantWithApplicantMap } from "./tenants";
import { getRentPaymentTotals } from "./helpers/rentsHelpers";
import { getApplicantsWithName } from "./applicants";

const RENEWAL_DAYS = 1000 * 60 * 60 * 24 * 60;

export const sites = atom({
  key: "_sites",
  default: sitesWithUnitsData,
});

export const getSitesMap = selector({
  key: "_getSitesMap",
  get: ({ get }) => {
    return new Map(get(sites).map((item) => [item.siteId, item]));
  },
});

export const getSitesWithApplicants = selector({
  key: "_getSitesWithApplicants",
  get: ({ get }) => {
    const allApplicants = get(getApplicantsWithName);

    return get(sites).map((site) => {
      return {
        ...site,
        applicants: allApplicants.filter((item) =>
          item.sitesAppliedFor.includes(site.siteId)
        ),
      };
    });
  },
});

export const getSitesWithApplicantsMap = selector({
  key: "_getSitesWithApplicantsMap",
  get: ({ get }) => {
    return new Map(
      get(getSitesWithApplicants).map((item) => [item.siteId, item])
    );
  },
});

export const getSitesWithTenant = selector({
  key: "_getSitesWithTenant",
  get: ({ get }) => {
    const sitesWithTenants = get(getSiteUnitTenantWithApplicantMap);

    return get(sites).map((site) => {
      const units = (site.units || []).map((unit) => {
        const tenantWithApplicantInfo = sitesWithTenants.get(
          `${site.siteId}-${unit.unitId}`
        );

        return {
          siteName: site.siteName,
          ...unit,
          tenant: tenantWithApplicantInfo,
        };
      });

      return {
        ...site,
        units,
      };
    });
  },
});

export const getSitesWithTenantMap = selector({
  key: "_getSitesWithTenantMap",
  get: ({ get }) => {
    return new Map(get(getSitesWithTenant).map((item) => [item.siteId, item]));
  },
});

export const getSiteTenantSummaryInfo = selector({
  key: "_getSiteTenantSummaryInfo",
  get: ({ get }) =>
    get(getSitesWithTenant).map((site) => {
      const { units, siteId, siteName } = site;
      const totalNumberOfUnits = units.length;
      const totalNumberOfOccupiedUnits = units.filter(
        (site) => !!site.tenant
      ).length;
      const totalNumberOfVacantUnits =
        totalNumberOfUnits - totalNumberOfOccupiedUnits;
      const totalPercentOccupied =
        totalNumberOfUnits === 0
          ? 0
          : Math.round(
              (totalNumberOfOccupiedUnits / totalNumberOfVacantUnits) * 100
            );

      return {
        siteId,
        siteName,
        totalNumberOfUnits,
        totalNumberOfOccupiedUnits,
        totalNumberOfVacantUnits,
        totalPercentOccupied: `${totalPercentOccupied}%`,
      };
    }),
});

export const getSiteApplicantsSummaryInfo = selector({
  key: "_getSiteApplicantsSummaryInfo",
  get: ({ get }) => {
    const siteApplicantsMap = get(getSitesWithApplicantsMap);

    return get(getSiteTenantSummaryInfo).map((site) => {
      const allSiteApplicants =
        siteApplicantsMap.get(site.siteId)?.applicants || [];

      return {
        ...site,
        totalNumberOfWaitingApplicants: allSiteApplicants.filter(
          (item) => item.applicantStatus === "a"
        ).length,
      };
    });
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

export const getSiteInfo = selectorFamily({
  key: "_getSiteInfo",
  get:
    (siteId) =>
    ({ get }) =>
      get(getSitesMap).get(siteId),
});

export const getSiteWithTenantsSummaryInfo = selectorFamily({
  key: "_getSiteWithTenantsSummaryInfo",
  get:
    (siteId) =>
    ({ get }) => {
      const siteInfo = get(getSitesWithTenantMap).get(siteId);

      const unitSummary = siteInfo.units.map((unit) => {
        const { tenant } = unit;
        const applicant = tenant?.applicant;

        const rentTotals = getRentPaymentTotals(
          tenant?.rents || [],
          tenant?.payments || []
        );

        return {
          ...unit,
          ...tenant,
          ...applicant,
          ...rentTotals,
          tenantFullName: `${applicant?.firstName || ""} ${
            applicant?.lastName || ""
          }`,
        };
      });

      return {
        ...siteInfo,
        units: unitSummary,
      };
    },
});

export const getSiteWithApplicantsSummaryInfo = selectorFamily({
  key: "_getSiteWithApplicantsSummaryInfo",
  get:
    (siteId) =>
    ({ get }) =>
      get(getSitesWithApplicantsMap).get(siteId),
});
