import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getEmployeeSummaryInfo } from "../state/employees";
import { dateFormatter } from "../formatters/cellFormatters";

export const columns = [
  {
    field: "fullName",
    headerName: "Employee Name",
    width: 300,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 180,
  },
  { field: "allRoles", headerName: "Employee Roles", width: 180 },
  {
    field: "hireDate",
    headerName: "Start Date",
    width: 180,
    valueFormatter: dateFormatter
  },
];

export function ManagementEmployees() {
  const rowData = useRecoilValue(getEmployeeSummaryInfo);
  console.log("rr ", rowData);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.employeeId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
