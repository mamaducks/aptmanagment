import { atom, selector } from "recoil";
import { employeesData, employeeRoleData } from "./data/employees";
import { compact } from "lodash";

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
    new Map(get(employeeRoles).map((item) => [item.roleId, item])),
});

export const getEmployeeSummaryInfo = selector({
  key: "_getEmployeeSummaryInfo",
  get: ({ get }) => {
    const roleMap = get(employeeRoleDataMap);

    return get(employees).map((employee) => {
      return {
        ...employee,
        fullName: `${employee.firstName || ""} ${employee.lastName || ""}`,
        allRoles: compact(
          employee.roles.map((roleId) => roleMap.get(roleId)?.displayName)
        ).join(", "),
        hireDate: (new Date(employee.hireDate)).toLocaleDateString(),
      };
    });
  },
});
