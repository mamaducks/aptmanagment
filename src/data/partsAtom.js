import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";

//categorize part types?
export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";


export const getAllParts = atom({
  key: "getAllParts",
  default: {
    id: "1",
    partName: "spoon",
    price: "26",

   
  },
  effects_UNSTABLE: [localStorageEffect("partList", [])],
});

export const getPartState = selectorFamily({
  key: "getPartState",
  get:
    (siteId) =>
    ({ get }) => {
      return get(getAllParts).find((item) => item.id === siteId);
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