import {
  RecoilRoot,
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";
import { app } from "./app";
import { data } from "./data";
import { localStorageEffect } from "./localStorage";
const tableOfUsers = [
  { name: "Dave", dateHired: "", phoneNumber: "", employmentType: "", userId: "", employeeId: "", userPassword: "" },
  { name: "Leona" },
  { name: "Lilli" },
  { name: "Abby" },
  { name: "Emmalee" },
  { name: "David" },
];

export const MAINTENANCE = "maintenance";
export const SITEMANAGER = "site manager";
export const MAINTENANCESUPER = "maintenance supervisor";
export const OFFICE = "office manager";
export const ADMIN = "admin";

export const allEmployees = atom({
  key: "allEmployees",
  default: data.employees,
  effects_UNSTABLE: [localStorageEffect("allEmployees", [])],
});

export const getEmployeeInfo = selectorFamily({
  key: "getEmployeeInfo",
  get:
    (employeeId) =>
    ({ get }) => {
      return get(allEmployees).find((item) => item.employeeId === employeeId);
    },
});
