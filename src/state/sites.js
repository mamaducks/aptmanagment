import { atom, selector } from "recoil";
import { sitesWithUnitsData } from "./data/sitesWithUnits";
import { siteUnitTenantWithApplicantMap } from "./tenants";

export const sites = atom({
  key: "_sites",
  default: sitesWithUnitsData,
});

export const getSiteWithTenant = selector({
  key: "_getSiteWithTenant",
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

export const getSiteTenantSummaryInfo = selector({
  key: "_getSiteTenantSummaryInfo",
  get: ({ get }) =>
    get(getSiteWithTenant).map((site) => {
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
