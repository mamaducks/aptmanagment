import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useSetRecoilState,
    useRecoilValue,
  } from 'recoil';

  const tableOfUsers = [
      {name: "Dave",
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
  
  