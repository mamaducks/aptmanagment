import { selector, selectorFamily } from "recoil";
import { app } from "./app";

export const getAllUnitsInfo = selector({
  key: "getAllUnitsInfo",
  get: ({ get }) =>
    get(app).sites.map((item) => ({
      ...item,
      units: (item.units || [])
        .map((unit) => ({
          ...unit,
          siteId: item.siteId,
          siteName: item.site,
        })),
    })),
});

export const getUnitsInfo = selectorFamily({
  key: "getUnitsInfo",
  get:
    (id) =>
    ({ get }) => {
      return get(getAllUnitsInfo).find((item) => item.siteId === id);
    },
});

export const unitStatsState = selector({
  key: 'unitStatsState',
  get: ({get}) => {
    const unitList = get(getAllUnitsInfo);
    const totalNum = unitList.length;
    const totalFilledNum = unitList.filter((item) => item.isTenant).length;
    const totalVacantNum = totalNum - totalFilledNum;
    const percentCompleted = totalNum === 0 ? 0 : totalFilledNum / totalNum * 100;

    return {
      totalNum,
      totalFilledNum,
      totalVacantNum,
      percentCompleted,
    };
  },
});