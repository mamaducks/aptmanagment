import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";

export const PENDING = "pending";
export const ACCEPTED = "accepted";
export const REJECTED = "rejected";
export const WITHDRAWL = "withdrawl";





export const applicantListState = atom({
  key: "applicantListState",
  default: [{
    id: "1",
    dateApplied: "3/3/22",
    name: "dave smith",
    phone: "856-777-0098",
    familySize: "3",
  }],
  effects_UNSTABLE: [localStorageEffect("applicantList", [])],
});


export const applicantListFilterState = atom({
  key: "applicantListFilterState",
  default: "Show All",
});

export const filteredApplicantListState = selector({
  key: "filteredApplicantListState",
  get: ({ get }) => {
    const filter = get(applicantListFilterState);
    const list = get(applicantListState);

    switch (filter) {
      case "Show Pending":
        return list.filter((item) => item.isPending);
      case "Show Accepted":
        return list.filter((item) => item.isAccepted);
      case "Show Rejected":
        return list.filter((item) => !item.isRejected);
        case "Show Withdrawl":
          return list.filter((item) => !item.isWithdrawl);
      default:
        return list;
    }
  },
});

// export const getAllNewsData = selector({
//   key: "getAllNewsData",
//   get: ({ get }) =>
//     get(getAllTelescopesInfo)
//       .map(({ id, title, recentNews = [] }) =>
//         recentNews.map((item) => ({
//           ...item,
//           telescopeId: id,
//           telescopeTitle: title,
//         }))
//       )
//       .flat()
//       .filter((item) => !!item.newsId),
// });

// export const getAllNewsDataFiltered = selector({
//   key: "getAllNewsDataFiltered",
//   get: ({ get }) =>
//     get(getAllNewsData).filter(
//       (item) => !get(excludedNewsIds).includes(item.telescopeId)
//     ),
// });

// export const getApplicantDataForTenant = selectorFamily({
//   key: "getApplicantDataForTenant",
//   get:
//     (applicantId) =>
//     ({ get }) =>
//       !applicantId
//         ? get(getAllApplicantDataAccepted)
//         : get(getAllApplicantData).filter(
//             (item) => item.applicantId === applicantId
//           ),
// });

export const getApplicantInfo = selectorFamily({
  key: "getApplicantInfo",
  get:
    (applicantId) =>
    ({ get }) => {
      return get(getApplicantInfo).find((item) => item.id === applicantId);
    },
});
