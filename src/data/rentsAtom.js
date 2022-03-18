import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";
import { sum, sumBy } from "lodash";
import { getAllSitesInfo } from "./siteAtoms";
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

const cannedData = [
  {
    employeeId: "1",
    siteId: "edgewoodAcres",
    unitId: "A01",
    amount: 234,
    type: "rent",
    timestamp: 1647571370628,
    tenantId: "smith",
  },
  {
    employeeId: "1",
    siteId: "edgewoodAcres",
    unitId: "A01",
    amount: 23,
    type: "payment",
    timestamp: 1647571470628,
    tenantId: "smith",
  },
  {
    employeeId: "1",
    siteId: "edgewoodAcres",
    unitId: "A01",
    amount: 34,
    type: "payment",
    timestamp: 1647572370628,
    tenantId: "smith",
  },
];

export const rentListState = atom({
  key: "rentListState",
  default: [
    {
      employeeId: "1",
      siteId: "edgewoodAcres",
      unitId: "A01",
      amount: 234,
      type: "rent",
      timestamp: 1647571370628,
      tenantId: "smith",
    },
    {
      employeeId: "1",
      siteId: "edgewoodAcres",
      unitId: "A01",
      amount: 523,
      type: "payment",
      timestamp: 1647571470628,
      tenantId: "smith",
    },
    {
      employeeId: "1",
      siteId: "edgewoodAcres",
      unitId: "A01",
      amount: 34,
      type: "payment",
      timestamp: 1647572370628,
      tenantId: "smith",
    },
  ],
  effects_UNSTABLE: [localStorageEffect("rentListState", [])],
});

export const getSiteRentTotals = selectorFamily({
  key: "getSiteRentTotals",
  get:
    (siteId) =>
    ({ get }) => {
      console.log(" get(rentListState)", get(rentListState));

      const items = get(rentListState).filter((item) => item.siteId === siteId);
      const rents = items.filter((item) => item.type === "rent");
      const payments = items.filter((item) => item.type === "payment");

      const rentsTotal = sumBy(rents, "amount");
      const paymentsTotal = sumBy(payments, "amount");
      const creditsTotal = Math.max(0, paymentsTotal - rentsTotal);
      const delinquentTotal = Math.max(0, (paymentsTotal - rentsTotal) * -1);

      return {
        rentsTotal,
        paymentsTotal,
        creditsTotal,
        delinquentTotal,
        totalSummary: creditsTotal - delinquentTotal,
      };
    },
});

export const getAllSitesRentTotals = selector({
  key: "getSiteRentTotals",
  get: ({ get }) => {
    const allSites = get(getAllSitesInfo);

    return allSites.map((item) => ({
      ...item,
      rentTotals: get(getSiteRentTotals(item.siteId)),
    }));
  },
});

// export const rentStatsState = selector({
//   key: "workOrderStatsState",
//   get: ({ get }) => {
//     // const rentDue = get(allWorkOrders);
//     const amountPaid = todoList.length;
//     const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
//     const totalUncompletedNum = totalNum - totalCompletedNum;
//     const percentCompleted =
//       totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

//     return {
//       totalNum,
//       totalCompletedNum,
//       totalUncompletedNum,
//       percentCompleted,
//     };
//   },
// });

// let a = amountDue;

// let b = amountPaid;

// let c = a + b;

function calculate() {
  //Look up the input and output elements in the document
  var amountDue = document.getElementById("amountDue");
  var amountPaid = document.getElementById("amountPaid");

  // const credit =  amountPaid - amountDue;
  // const delinquent =  amountDue - amountPaid;

  // if prevBalance > 1 : prevBalance + credit - delinquency == currentBalance

  // balance = prevBalance + currentBalance

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
}
