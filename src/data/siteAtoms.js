import { selector, selectorFamily } from "recoil";
import { app } from "./app";

export const getAllSitesInfo = selector({
  key: "getAllSitesInfo",
  get: ({ get }) => get(app).sites,
});

export const getSiteInfo = selectorFamily({
  key: "getSiteInfo",
  get:
    (siteId) =>
    ({ get }) => {
      return get(getAllSitesInfo).find((item) => item.id === siteId);
    },
});
