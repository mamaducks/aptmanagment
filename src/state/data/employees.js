import { Reference } from "./reference";

export const employeeRoleData = [
  { value: "admin", label: "Admin" },
  { value: "maintenance", label: "Maintenance" },
  { value: "siteManager", label: "Site Manager" },
  { value: "maintenanceSupervisor", label: "Maintenance Supervisor" },
  { value: "officeManager", label: "Office Manager" },
];

export const employeesData = [
  {
    firstName: "Leona",
    lastName: "Duckworth",
    employeeId: "employeeId",
    phoneNumber: "(856) 232-1550",
    hireDate: Reference.dateTime,
    roles: [
      employeeRoleData[0].value,
      employeeRoleData[1].value,
      employeeRoleData[2].value,
      employeeRoleData[3].value,
      employeeRoleData[4].value,
    ],
  },
];
