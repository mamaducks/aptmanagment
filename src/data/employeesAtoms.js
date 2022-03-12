import {
    RecoilRoot,
    atom,
    selector,
    selectorFamily,
    useRecoilState,
    useSetRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {app} from "./app";
import { localStorageEffect } from './localStorage';
  const tableOfUsers = [
      {name: "Dave",
      dateHired: "",
      phoneNumber: "",
      employmentType: "",
    },
    {name: "Leona",
    },
    {name: "Lilli",
    },
    {name: "Abby",
    },
    {name: "Emmalee",
    },
    {name: "David",
    }

  ]

  

  export const MAINTENANCE = "maintenance";
export const SITEMANAGER = "site manager";
export const MAINTENANCESUPER = "maintenance supervisor";
export const OFFICE = "office manager";
export const ADMIN = "admin";


export const getAllEmployeesInfo = selector({
    key: "getAllEmployeesInfo",
    get: ({ get }) => get(app).employees,
  });
  
  export const getEmployeeInfo = selectorFamily({
    key: "getEmployeeInfo",
    get:
      (employeeId) =>
      ({ get }) => {
        return get(getAllEmployeesInfo).find((item) => item.employeeId === employeeId);
      },
  });