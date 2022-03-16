import {
    RecoilRoot,
    atom,
    selector,
    selectorFamily,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import { localStorageEffect } from "./localStorage";


  export const allWorkOrders = atom({
    key: 'allWorkOrders',
    default: [],
    effects_UNSTABLE: [localStorageEffect("allWorkOrders", [])],
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
    key: 'workOrderFilterState',
    default: 'Show All',
  });

  export const filteredWorkOrderListState = selector({
    key: 'filteredWorkOrderListState',
    get: ({get}) => {
      const filter = get(workOrderFilterState);
      const list = get(allWorkOrders);
  
      switch (filter) {
        case 'Show Completed':
          return list.filter((item) => item.isComplete);
        case 'Show Uncompleted':
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },
  });

  export const workOrderStatsState = selector({
    key: 'workOrderStatsState',
    get: ({get}) => {
      const todoList = get(allWorkOrders);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  });
