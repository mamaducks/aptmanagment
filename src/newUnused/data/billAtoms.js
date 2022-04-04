import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";
import { app } from "./app";
import { forRealBills } from "./bills";
import { groupBy, upperFirst, sumBy } from "lodash";
//category types?
export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";

export const FLOORING = "flooring";
export const PAINTING = "painting";

export const ALL_TYPES = [FLOORING, PAINTING];

export const allBills = atom({
  key: "allBills",
  default: forRealBills,
  //effects_UNSTABLE: [localStorageEffect("allBills", [])],
});

export const getBillCategories = selector({
  key: "getBillCategories",
  get: ({ get }) => get(app).billCategories,
});

export const getBillsInfo = selector({
  key: "getBillsInfo",
  get: ({ get }) => get(app).bills,
});

export const getBillsInfoNew = selector({
  key: "getBillsInfoNew",
  get: ({ get }) => {
    const billsWithBillType = get(allBills).map((item) => {
      const category =
        get(getBillCategories).find(
          (category) => category.categoryId === item.categoryId
        ) || {};

      return {
        ...item,
        category,
      };
    });

    console.log(billsWithBillType);

    const groupedStuff = groupBy(billsWithBillType, "category.billType");

    return Object.keys(groupedStuff).map((billType) => {
      const billsForThisType = groupedStuff[billType];
      const groupedTypedBills = groupBy(billsForThisType, "categoryId");

      const billTypeItem = {
        billType: upperFirst(billType),
        categories: Object.keys(groupedTypedBills).map((categoryId) => {
          const { category } = groupedTypedBills[categoryId][0];

          return {
            total: sumBy(groupedTypedBills[categoryId], "amountPaid"),
            ...category,
          };
        }),
      };

      return billTypeItem;
    });
  },
});

export const filteredBillCategories = atom({
  key: "filteredBillCategories",
  default: ALL_TYPES,
});

export const billListFilterState = atom({
  key: "billListFilterState",
  default: "Show All",
});
