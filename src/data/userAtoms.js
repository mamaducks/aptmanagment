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

// export const OTHER = "other";


//   export const allUsersState = atom({
//     key: 'allUsersState',
//     default: [],
//   });

//   const getAllUsersState = selector({
//     key: 'getAllUsersState',
//     get: ({get}) => {
//       return tableOfUsers[get(allUsersState)];
//     },
//   });


const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
  });
  
  const currentUserNameState = selector({
    key: 'CurrentUserName',
    get: ({get}) => {
      return tableOfUsers[get(currentUserIDState)].name;
    },
  });
  
  export function CurrentUserInfo() {
    const userName = useRecoilValue(currentUserNameState);
    return <div>Hello {userName}</div>;
  };

//   export function AllEmployees() {
//     const user = useRecoilValue(getAllUsersState);

//       return (
// <div>Hello {user}</div>
//       );
//   }
  
  