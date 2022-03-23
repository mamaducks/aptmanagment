import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { waitingApplicants } from "../../data/applicantAtoms";


const handleClick = (e, cellValues ) => {
  console.log(cellValues.row);
}

export const columns = [
  { field: 'id', headerName: 'number', width: 80 },
  { field: 'status', headerName: 'Status', width: 90 },
  { field: 'dateApplied', headerName: 'Date Applied', width: 130 },
  { field: 'timeApplied', headerName: 'Time', width: 80 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'race', headerName: 'Race', width: 80 },
  { field: 'gender', headerName: 'M/F', width: 80 },
  { field: 'familySize', headerName: 'Family Size', width: 120 },
  { field: 'incomeLevel', headerName: 'Income Level', width: 120 },
  { field: 'unitSize', headerName: 'Unit Size', width: 80 },
  { field: 'rentalAssistance', headerName: 'Rental Assistance', width: 120 },
  {
    field: "View Applicant Info",
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
          View Info
        </Button>
      );
    }
  }
];



export function WaitingListGrid() {
  const rowData = useRecoilValue(waitingApplicants);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid getRowId={(item) => item.id} rows={rowData} columns={columns} />
    </div>
  );
}