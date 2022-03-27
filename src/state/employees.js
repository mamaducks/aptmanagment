import { atom, selector } from "recoil";
import { employeesData, employeeRoleData } from "./data/employees";

export const employees = atom({
  key: "_employees",
  default: employeesData,
});

export const employeeRoles = atom({
  key: "_employeeRoles",
  default: employeeRoleData,
});

export const employeeRoleDataMap = selector({
  key: "_employeeRoleDataMap",
  get: ({ get }) =>
    new Map(get(employeeRoles).map((item) => [item.value, item])),
});

export const getEmployeeSummaryInfo = selector({
  key: "_getEmployeeSummaryInfo",
  get: ({ get }) => {
    return get(employees).map((employee) => {
      return {
        ...employee,
      };
    });
  },
});
