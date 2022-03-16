import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";
import { app } from "./app";

//categorize part types?
export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";


export const getAllParts = atom({
  key: "getAllParts",
  default: [],
  effects_UNSTABLE: [localStorageEffect("getAllParts", [])],
});

export const getWorkOrderParts = selector({
  key: "getWorkOrderParts",
  get: ({ get }) => 
  get(app).parts.map((item) => ({
    ...item,
    parts: (item.parts || [])
    .map((part) => ({
      ...part,
      partName: item.partName,
      partPrice: item.partPrice,
    })),
  })),
});


export const getPartsInfo = selectorFamily({
  key: "getPartsInfo",
  get:
    (partId) =>
    ({ get }) => {
      return get(getAllParts).find((item) => item.id === partId);
    },
});


export const partsListFilterState = atom({
    key: "partsListFilterState",
    default: "Show All",
  });
  
//   export const filteredBillListState = selector({
//     key: "filteredTenantListState",
//     get: ({ get }) => {
//       const filter = get(billListFilterState);
//       const list = get(getBillState);
  
//       switch (filter) {
//         case "Show Upcoming Renewals":
//           return list.filter((item) => item.isUpcoming);
//       //   case "Show Accepted":
//       //     return list.filter((item) => item.isAccepted);
//       //   case "Show Rejected":
//       //     return list.filter((item) => !item.isRejected);
//         default:
//           return list;
//       }
//     },
//   });