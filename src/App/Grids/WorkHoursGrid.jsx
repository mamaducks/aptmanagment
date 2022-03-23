import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { allHours } from "../../data/workOrderHoursAtoms";


const handleClick = (e, cellValues ) => {
  console.log(cellValues.row);
}

export const columns = [
  { field: 'employeeName', headerName: 'employee', width: 300 },
  { field: 'siteId', headerName: 'Site', width: 180 },
  { field: 'hoursBilled', headerName: 'Hours Billed', width: 180 },
  {
    field: "View Work Orders",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleClick(e, cellValues);
          }}
        >
          View Work Orders
        </Button>
      );
    }
  }
];



export function EmployeeWorkHoursGrid() {
  const rowData = useRecoilValue(allHours);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid getRowId={(item) => item.employeeId} rows={rowData} columns={columns} />
    </div>
  );
}