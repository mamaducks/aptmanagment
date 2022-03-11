import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";

//category types?
export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";

export const getAllBillsInfo = atom({
  key: "getAllBillsInfo",
  default: {
    id: "1",
    dateBilled: "3/3/22",
    billType: "dave smith",
    recipient: "856-777-0098",
    amountPaid: "3",
    datePaid: "3/3/22",
    site: "royal",
  },
  effects_UNSTABLE: [localStorageEffect("billList", [])],
});

export const getBillState = selectorFamily({
  key: "getBillState",
  get:
    (siteId) =>
    ({ get }) => {
      return get(getAllBillsInfo).find((item) => item.id === siteId);
    },
});


export const billListFilterState = atom({
    key: "billListFilterState",
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