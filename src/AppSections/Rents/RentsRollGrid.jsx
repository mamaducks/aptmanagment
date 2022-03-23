import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllSitesRentTotals } from "../../data/rentsAtom";


const handleClick = (e, cellValues ) => {
  console.log(cellValues.row);
}

export const columns = [
  { field: 'site', headerName: 'site', width: 300 },
  { field: 'rentTotals.paymentsTotal', headerName: 'Total Rent Paid', width: 180 },
  { field: 'deposits', headerName: 'Total Deposits', width: 180 },
  { field: 'rentTotals.creditsTotal', headerName: 'Total Credit', width: 180 },
  { field: 'rentTotals.delinquentTotal', headerName: 'Total Delinquent', width: 180 },
  {
    field: "View Site Rents",
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
          View Rents Info
        </Button>
      );
    }
  }
];



export function RentRollGrid() {
  const rowData = useRecoilValue(getAllSitesRentTotals);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid getRowId={(item) => item.siteId} rows={rowData} columns={columns} />
    </div>
  );
}