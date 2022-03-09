import { atom, selector, selectorFamily } from "recoil";

export const getAllSitesInfo = atom({
  key: "getAllSitesInfo",
  default: [],
});

export const getSiteInfo = selectorFamily({
  key: "getSiteInfo",
  get:
    (siteId) =>
    ({ get }) => {
      return get(getAllSitesInfo).find((item) => item.id === siteId);
    },
});
