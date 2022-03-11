import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  export const workOrderState = atom({
    key: 'workOrderState',
    default: [],
  });

  export const workOrderFilterState = atom({
    key: 'workOrderFilterState',
    default: 'Show All',
  });

  export const filteredWorkOrderListState = selector({
    key: 'filteredWorkOrderListState',
    get: ({get}) => {
      const filter = get(workOrderFilterState);
      const list = get(workOrderState);
  
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
      const todoList = get(workOrderState);
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
