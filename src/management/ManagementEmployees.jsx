import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { allEmployees } from "../data/employeesAtoms";
import { useParams } from "react-router-dom";

export const columns = [
  {
    field: "firstName",
    headerName: "Employee Name",
    width: 300,
    valueGetter: ({ row }) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 180,
  },
  { field: "employeeType", headerName: "Type of Employee", width: 180 },
  {
    field: "dateHired",
    headerName: "Start Date",
    width: 180,
  },
  {
    field: "rate",

    headerName: "Rate?",
    width: 180,
  },
  {
    field: "endDate",

    headerName: "End Date",
    width: 180,
  },
  {
    field: "View Employee",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/Management/employees/${cellValues.row.employeeId}`}
        >
          View Employee
        </Button>
      );
    },
  },
];

export function ManagementEmployees() {
  const rowData = useRecoilValue(allEmployees);

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
