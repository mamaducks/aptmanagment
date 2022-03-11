import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";

//categorize employee hours?
export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";

export const getAllHours = atom({
  key: "getAllHours",
  default: {
    id: "1",
    employeeId: "smith",
    price: "hours",
  },
  effects_UNSTABLE: [localStorageEffect("hoursList", [])],
});

export const getHoursState = selectorFamily({
  key: "getPartState",
  get:
    (siteId) =>
    ({ get }) => {
      return get(getAllHours).find((item) => item.id === siteId);
    },
});

export const hoursListFilterState = atom({
  key: "hoursListFilterState",
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
