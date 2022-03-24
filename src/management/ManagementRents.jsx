import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllSitesRentTotals } from "../data/rentsAtom";

export const columns = [
  { field: "site", headerName: "site", width: 300 },
  {
    field: "paymentsTotal",
    valueGetter: ({ row }) => row.rentTotals.paymentsTotal,
    headerName: "Total Rent Paid",
    width: 180,
  },
  { field: "deposits", headerName: "Total Deposits", width: 180 },
  {
    field: "rentTotals.creditsTotal",
    valueGetter: ({ row }) => row.rentTotals.creditsTotal,
    headerName: "Total Credit",
    width: 180,
  },
  {
    field: "delinquentTotal",
    valueGetter: ({ row }) => row.rentTotals.delinquentTotal,

    headerName: "Total Delinquent",
    width: 180,
  },
  {
    field: "View Site Rents",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/site/${cellValues.row.siteId}/rents`}
        >
          View Rents Info
        </Button>
      );
    },
  },
];

export function ManagementRents() {
  const rowData = useRecoilValue(getAllSitesRentTotals);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
