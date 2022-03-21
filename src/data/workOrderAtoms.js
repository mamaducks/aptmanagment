import {
  RecoilRoot,
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { localStorageEffect } from "./localStorage";
import { app } from "./app";
import { groupBy, upperFirst, sumBy } from "lodash";

export const maintenanceHours = [
  {
    employeeId: "2",
    siteId: "edgewoodAcres",
    regHours: 170.0,
    overtimeHours: 19,
  },
  {
    employeeId: "4",
    siteId: "edgewoodAcresII",
    regHours: 220.0,
    overtimeHours: 9,
  },
  {
    employeeId: "2",
    siteId: "edgewoodAcresIV",
    regHours: 170.0,
    overtimeHours: 16,
  },
  {
    employeeId: "1",
    siteId: "edgewoodAcres",
    regHours: 220.0,
    overtimeHours: 4,
  },
];

export const workOrders = [
  {
    employeeId: "3",
    dateRequest: 1647779696905,
    siteId: "edgewoodGardensI",
    unitId: "403",
    tenant: "friesjknf",
    phone: "3578900",
    workOrderId: 3,
    workRequest: "fix sink",
    workStatus: "completed", 
    maintenanceHours: [
      {
        hours: 4,
        hoursRate: 20,
      },
      {
        hours: 4,
        hoursRate: 20,
      },
      { hours: 7,
        hoursRate: 20,
       },
    ],
    maintenanceParts: [
      {
        partId: "3",
        partName: "stick",
        partPrice: 30,
      },
      {
        partId: "4",
        partName: "finisk",
        partPrice: 10,
      },
      {
        partId: "5",
        partName: "snake",
        partPrice: 8,
      },
    ],
    totalPartPrice: 48,
    totalHours: 14,
    totalPartsHours: 70

  },

  {
    employeeId: "3",
    dateRequest: 1647773696905,
    siteId: "edgewoodacresIII",
    unitId: "403",
    tenant: "applefriesjknf",
    phone: "3578900",
    workOrderId: 3,
    workRequest: "fix tub",
    workStatus: "current", 
    maintenanceHours: [
      {
        hours: 4,
        hoursRate: 20,
      },
      {
        hours: 4,
        hoursRate: 20,
      },
      { hours: 7,
        hoursRate: 20,
       },
    ],
    maintenanceParts: [
      {
        partId: "3",
        partName: "stick",
        partPrice: 30,
      },
      {
        partId: "4",
        partName: "finisk",
        partPrice: 10,
      },
      {
        partId: "5",
        partName: "snake",
        partPrice: 8,
      },
    ],
    totalPartPrice: 28,
    totalHours: 4,
    totalPartsHours: 40

  },
];

export const workOrderBills = [
  {
    categoryId: "painting",
    siteId: "edgewoodAcres",
    amount: 170.0,
    datePaid: 1647779696905,
  },
  {
    categoryId: "snow",
    siteId: "edgewoodAcres",
    amount: 220.0,
    datePaid: 1647779596905,
  },
  {
    categoryId: "appliance",
    siteId: "edgewoodAcresIII",
    amount: 123.54,
    datePaid: 1647779696905,
  },
  {
    categoryId: "maintenanceHours",
    siteId: "edgewoodAcresIII",
    amount: 1323.54,
    datePaid: 1647779696905,
  },
  {
    categoryId: "supplies",
    siteId: "edgewoodAcresIII",
    amount: 223.54,
    datePaid: 1647779696905,
  },
];

export const workOrderCategories = [
  {
    categoryId: "flooring",
    desc: "Flooring",
    billType: "maintenance",
  },
  {
    categoryId: "painting",
    desc: "Painting supplies",
    billType: "maintenance",
  },
  {
    categoryId: "painting",
    desc: "Painting Hours",
    billType: "maintenance",
  },
  {
    categoryId: "snow",
    desc: "Snow",
    billType: "maintenance",
  },
  {
    categoryId: "lawn",
    desc: "Lawn",
    billType: "maintenance",
  },
  {
    categoryId: "maintenanceHours",
    desc: "maintenance Hours",
    billType: "maintenance",
  },
  {
    categoryId: "maintenanceParts",
    desc: "maintenance Parts",
    billType: "maintenance",
  },
  {
    categoryId: "appliances",
    desc: "Appliances",
    billType: "maintenance",
  },
];

export const allWorkOrders = atom({
  key: "allWorkOrders",
  default: workOrders,
})

export const allWorkOrderBills = atom({
  key: "allWorkOrdersBills",
  default: workOrderBills,
  // effects_UNSTABLE: [localStorageEffect("allWorkOrders", [])],
});

export const getWorkOrderCategories = selector({
  key: "getWorkOrderCategories",
  get: ({ get }) => get(app).workOrderCategories,
});

export const getWorkOrderInfoNew = selector({
  key: "getWorkOrderInfoNew",
  get: ({ get }) => {
    const workOrderType = get(allWorkOrderBills).map((item) => {
      const category =
        get(getWorkOrderCategories).find(
          (category) => category.categoryId === item.categoryId
        ) || {};

      return {
        ...item,
        category,
      };
    });
    const groupedStuff = groupBy(workOrderType, "category.categoryId");
    return Object.keys(groupedStuff).map((desc) => {
      const workOrderBillsForThisType = groupedStuff[desc];
      const groupedTypeWorkOrders = groupBy(
        workOrderBillsForThisType,
        "categoryId"
      );

      const workOrderTypeItem = {
        desc: upperFirst(desc),
        categories: Object.keys(groupedTypeWorkOrders).map((categoryId) => {
          const { category } = groupedTypeWorkOrders[categoryId][0];

          return {
            total: sumBy(groupedTypeWorkOrders[categoryId], "amount"),
            ...category,
          };
        }),
      };
      return workOrderTypeItem;
    });
  },
});

export const getWorkOrderBillInfo = selectorFamily({
  key: "getWorkOrderBillInfo",
  get:
    (workOrderId) =>
    ({ get }) => {
      return get(allWorkOrderBills).find((item) => item.id === workOrderId);
    },
});

export const getWorkOrderInfo = selectorFamily({
  key: "getWorkOrderInfo",
  get: 
  (workOrderId) => 
  ({ get }) => {
    return get(allWorkOrders).find((item) => item.id === workOrderId);
  },
});


export const workOrderFilterState = atom({
  key: "workOrderFilterState",
  default: "Show All",
});

export const filteredWorkOrderListState = selector({
  key: "filteredWorkOrderListState",
  get: ({ get }) => {
    const filter = get(workOrderFilterState);
    const list = get(allWorkOrderBills);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const workOrderStatsState = selector({
  key: "workOrderStatsState",
  get: ({ get }) => {
    const todoList = get(allWorkOrderBills);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
