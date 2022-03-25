import { atom, selector, selectorFamily } from "recoil";
import { sitesWithUnitsData } from "./data/sitesWithUnits";
import { siteUnitTenantWithApplicantMap } from "./tenants";

export const sites = atom({
  key: "_sites",
  default: sitesWithUnitsData,
});

export const getSitesWithTenant = selector({
  key: "_getSitesWithTenant",
  get: ({ get }) => {
    const sitesWithTenants = get(siteUnitTenantWithApplicantMap);

    return get(sites).map((site) => {
      const units = (site.units || []).map((unit) => {
        const tenantWithApplicantInfo = sitesWithTenants.get(
          `${site.siteId}-${unit.unitId}`
        );

        return {
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

export const getSiteWithTenantsSummaryInfo = selectorFamily({
  key: "_getSiteWithTenantsSummaryInfo",
  get:
    (siteId) =>
    ({ get }) => {
      const siteInfo = get(getSitesWithTenantMap).get(siteId);

      const unitSummary = siteInfo.units.map((unit) => {
        const { tenant } = unit;
        const applicant = tenant?.applicant;

        return {
          ...unit,
          ...tenant,
          ...applicant,
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
