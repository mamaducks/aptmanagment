
import { Reference } from "./reference";
import { sitesWithUnitsData } from "./sitesWithUnits";

export const employeeRoleData = [
  { value: "admin", label: "Admin" },
  { value: "maintenance", label: "Maintenance" },
  { value: "siteManager", label: "Site Manager" },
  { value: "maintenanceSupervisor", label: "Maintenance Supervisor" },
  { value: "officeManager", label: "Office Manager" },
];

export const EMPTY_EMPLOYEE = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateHired: Reference.dateTime,
  roles: employeeRoleData[0].value,
};

// export const applicantStatusData = mapPropsToOptions(APPLICANT_STATUS_MAP);

export const employeesData = [
  {
    firstName: "Leona",
    lastName: "Duckworth",
    employeeId: "employeeId",
    phoneNumber: "(856) 232-1550",
    dateHired: Reference.dateTime,
    roles: [
      employeeRoleData[0].value,
      employeeRoleData[1].value,
      employeeRoleData[2].value,
      employeeRoleData[3].value,
      employeeRoleData[4].value,
    ],
    sitePermissionsFor: [
      sitesWithUnitsData[0].siteId,
      sitesWithUnitsData[4].siteId,
    ],
  },
];
