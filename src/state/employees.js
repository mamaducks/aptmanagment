import { atom, selector, selectorFamily } from "recoil";
import { Reference } from "./data/reference";
import { localStorageEffect } from "./localStorageEffect";
import { employeesData, employeeRoleData } from "./data/employees";
import { getId, updateState } from "./helpers/dataHelpers";

export const EMPTY_EMPLOYEE = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateHired: Reference.dateTime,
  roles: employeeRoleData[0].value,

};

export const employees = atom({
  key: "_employees",
  default: [],
  effects_UNSTABLE: [localStorageEffect("_employees", employeesData)],

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

export const getEmployeeMap = selector({
  key: "getEmployeeMap",
  get: ({ get }) =>
    new Map(get(getEmployeeSummaryInfo).map((item) => [item.value, item])),
});

export const getEmployeeFormData = selectorFamily({
  key: "_getEmployeeFormData",
  get:
    (employeeId) =>
    ({ get }) =>
      get(getEmployeeMap).get(employeeId) || {
        employeeId: getId(),
        roles: get(employeeRoles)[0].value,
        dateHired: Date.now(),
        sitePermissionsFor: [],
        employees: [{ ...EMPTY_EMPLOYEE }],
      },
  set:
    () =>
    ({ get, set }, newItem) => {
      const newState = updateState(
        get(employees),
        (item) => item.employeeId === newItem.employeeId,
        newItem,
        false
      );

      set(employees, newState);
    },
});
