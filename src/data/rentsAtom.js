

import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";


// const rents = {
//     employeeId: "",
//     siteId: "",
//     unitId: "",
//     month: "",
//     amountPaid: "",
//     amountDue: "",
//     credit: "",
//     delinquent: "",
//     carryOver: "",
//     tenantId: "",
//     siteTotals: "",
//     unitTotals: "",
//     depositTotals: "",

// }



// export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";

export const rentListState = atom({
  key: "rentListState",
  default: {
    employeeId: "1",
    siteId: "3/3/22",
    unitId: "dave smith",
    month: "856-777-0098",
    amountPaid: "3",
    amountDue: "year",
    credit: "royal",
    delinquent: "46",
    carryOver: "200",
    tenantId: "smith",
    siteTotals: "50000",
    unitTotals: "2000",
    depositTotals: "50000",
  },

  effects_UNSTABLE: [localStorageEffect("rentList", [])],
});

// export const rentListFilterState = atom({
//   key: "tenantListFilterState",
//   default: "Show All",
// });

// export const filteredRentListState = selector({
//   key: "filteredTenantListState",
//   get: ({ get }) => {
//     const filter = get(rentListFilterState);
//     const list = get(rentListState);

//     switch (filter) {
//       case "Show Upcoming Renewals":
//         return list.filter((item) => item.isUpcoming);
//     //   case "Show Accepted":
//     //     return list.filter((item) => item.isAccepted);
//     //   case "Show Rejected":
//     //     return list.filter((item) => !item.isRejected);
//       default:
//         return list;
//     }
//   },
// });