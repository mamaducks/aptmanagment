import { atom, selector, selectorFamily } from "recoil";
import { localStorageEffect } from "./localStorage";

//categorize employee hours?
export const UPCOMING = "upcoming";
// export const ACCEPTED = "accepted";
// export const REJECTED = "rejected";

export const maintenanceHours = [
  {
    employeeId: "3",
    employeeName: "mike k",
    siteId: "edgewoodAcres",
   hoursBilled: 32,
   billType: "maintenanceHours",
   workOrderId: "3"
  },
  {
    employeeId: "5",
    employeeName: "joe reed",
    siteId: "edgewoodAcresIII",
   hoursBilled: 38,
   billType: "maintenanceHours",
   workOrderId: "3"
   
  },

];

export const allHours = atom({
  key: "allHours",
  default: maintenanceHours,
  //effects_UNSTABLE: [localStorageEffect("allBills", [])],
});



export const getAllHours = atom({
  key: "getAllHours",
  default: {
    id: "1",
    employeeId: "smith",
    price: "hours",
  },
  effects_UNSTABLE: [localStorageEffect("hoursList", [])],
});

// export const getSiteHours = selector({
//   key: "",
//   get: ({ get }) => {
//    const hoursWithSite = get(allHours).map((item) => {
//       const site = 
//       get(getSiteHours)
//     })
//   }
// })


export const getHoursState = selectorFamily({
  key: "getHoursState",
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



// export const workOrderStatsState = selector({
//   key: 'workOrderStatsState',
//   get: ({get}) => {
//     const hoursList = get(getAllHours); //by employee and total site hours

//     const totalEmpolyeeWorkOrderHours = get()

//     const totalNumHours = hoursList.length;

//     // const totalEmployeeHoursBilled = maintenanceHours.length;

//     // const totalCompletedNum = hoursList.filter((item) => item.isComplete).length;
//     // const totalUncompletedNum = totalNum - totalCompletedNum;
//     // const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

//     return {
//       totalEmpolyeeWorkOrderHours,
//       totalNumHours,

//       // totalEmployeeHoursBilled,
//       // totalUncompletedNum,
//       // percentCompleted,
//     };
//   },
// });