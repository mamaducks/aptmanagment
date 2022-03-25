import { Reference } from "./reference";

export const employeeRoleData = [
  { roleId: "admin", displayName: "Admin" },
  { roleId: "maintenance", displayName: "Maintenance" },
  { roleId: "siteManager", displayName: "Site Manager" },
  { roleId: "maintenanceSupervisor", displayName: "Maintenance Supervisor" },
  { roleId: "officeManager", displayName: "Office Manager" },
];

export const employeesData = [
  {
    firstName: "Leona",
    lastName: "Duckworth",
    employeeId: "employeeId",
    phoneNumber: "(856) 232-1550",
    hireDate: Reference.dateTime,
    roles: [
      employeeRoleData[0].roleId,
      employeeRoleData[1].roleId,
      employeeRoleData[2].roleId,
      employeeRoleData[3].roleId,
      employeeRoleData[4].roleId,
    ],
  },
];
