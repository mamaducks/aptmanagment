import { selector, selectorFamily } from "recoil";
import { app } from "./app";
import { tenantList } from "./tenantAtoms";
import { applicantListState } from "./applicantAtoms";

export const getAllUnitsInfo = selector({
  key: "getAllUnitsInfo",
  get: ({ get }) =>
    get(app).sites.map((item) => {
      const units = (item.units || []).map((unit) => {
        const tenantInfo = get(tenantList).find(
          (tenant) => tenant.unitId === unit.id && tenant.siteId === item.siteId
        );

        const applicantData = tenantInfo
          ? get(applicantListState).find(
              (applicant) => applicant.id === tenantInfo.applicantId
            )
          : undefined;

        return {
          ...unit,
          siteId: item.siteId,
          siteName: item.site,
          tenant:
            tenantInfo && applicantData
              ? {
                  ...tenantInfo,
                  ...applicantData,
                }
              : undefined,
        };
      });

      const totalNum = units.length;
      const totalFilledNum = units.filter((item) => !!item.tenant).length;
      const totalVacantNum = totalNum - totalFilledNum;
      const percentCompleted =
        totalNum === 0 ? 0 : (totalFilledNum / totalNum) * 100;

      return {
        ...item,
        units,

        unitInfo: {
          totalNum,
          totalFilledNum,
          totalVacantNum,
          percentCompleted,
        },
      };
    }),
});

export const getUnitsInfo = selectorFamily({
  key: "getUnitsInfo",
  get:
    (siteId) =>
    ({ get }) => {
      return get(getAllUnitsInfo).find((item) => item.siteId === siteId);
    },
});
