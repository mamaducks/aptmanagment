import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";
// import { useDispatch, useSelector } from "react-redux";

import { getAllSitesInfo } from "./siteAtoms";
import { tenantList } from "./tenantAtoms";

export const PENDING = "Pending";
export const APPROVED = "Approved";
export const REJECTED = "Rejected";
export const WITHDRAWL = "Withdrawl";

export const ALL_STATUS = [PENDING, APPROVED, REJECTED, WITHDRAWL];

export const filteredStatusTypes = atom({
  key: "filteredStatusTypes",
  default: ALL_STATUS,
});

export const applicantListState = atom({
  key: "applicantListState",
  default: [],
  effects_UNSTABLE: [localStorageEffect("applicantList", [])],
});

export const waitingApplicants = selector({
  key: "waitingApplicants",
  get: ({ get }) => {
    const tenantIds = get(tenantList).map((item) => item.applicantId);

    return get(applicantListState).filter(
      (item) => !tenantIds.includes(item.id)
    );
  },
});
export const applicantListFilterState = atom({
  key: "applicantListFilterState",
  default: "Show All",
});

export const getAllApplicantData = selector({
  key: "getAllApplicantData",
  get:
    (siteId) =>
    ({ get }) =>
      !siteId
        ? get(applicantListState)
        : get(getAllSitesInfo).filter((item) => item.siteId === siteId),
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
      return get(applicantListState).find((item) => item.id === applicantId);
    },
});
