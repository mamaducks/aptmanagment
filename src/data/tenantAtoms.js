import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";

export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";

export const tenants = [
  {
    id: "1",
    tenantName: "friendally",
    moveInDate: "2/28/2019",
    dateLease: "3/3/22",
    name: "dave smith",
    phone: "856-777-0098",
    familySize: "3",
    renewalDate: "3/3/23",
    siteId: "edgewoodAcres",
    unit: "46"
  },
]

export const tenantList = atom({
  key: "tenantList",
  default: tenants
  // effects_UNSTABLE: [localStorageEffect("tenantList", [])],
});

export const tenantListFilterState = atom({
  key: "tenantListFilterState",
  default: "Show All",
});

export const filteredTenantListState = selector({
  key: "filteredTenantListState",
  get: ({ get }) => {
    const filter = get(tenantListFilterState);
    const list = get(tenantList);

    switch (filter) {
      case "Show Upcoming Renewals":
        return list.filter((item) => item.isUpcoming);
    //   case "Show Accepted":
    //     return list.filter((item) => item.isAccepted);
    //   case "Show Rejected":
    //     return list.filter((item) => !item.isRejected);
      default:
        return list;
    }
  },
});