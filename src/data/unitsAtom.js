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
