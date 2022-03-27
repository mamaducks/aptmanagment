import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getEmployeeSummaryInfo } from "../state/employees";
import {
  dateFormatter,
  referenceArrayFormatter,
} from "../formatters/cellFormatters";
import { employeeRoleData } from "../state/data/employees";
import { fullNameValueGetter } from "../formatters/valueGetters";
import { useColumns } from "../state/helpers/hooks";

export const columns = [
  {
    field: "fullName",
    headerName: "Employee Name",
    valueGetter: fullNameValueGetter,
    width: 300,
  },
  {
    field: "phoneNumber",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Phone Number",
    width: 180,
  },
  {
    field: "roles",
    headerName: "Employee Roles",
    width: 350,
    valueGetter: ({ row: { roles = [] } }) =>
      referenceArrayFormatter(employeeRoleData)({ value: roles }),
  },
  {
    field: "hireDate",
    headerName: "Start Date",
    width: 180,
    valueFormatter: dateFormatter,
  },
];

export function ManagementEmployees() {
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getEmployeeSummaryInfo);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.employeeId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
