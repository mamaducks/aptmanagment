import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getSiteRentsSummaryInfo } from "../state/rents";

export const columns = [
  { field: "siteName", headerName: "Site", width: 320 },

  {
    field: "rentsTotal",
    headerName: "Rents Total",
    width: 240,
  },
  {
    field: "paymentsTotal",
    headerName: "Payments Total",
    width: 200,
  },
  {
    field: "creditsTotal",
    headerName: "Credits Total",
    width: 200,
  },
  {
    field: "delinquentTotal",
    headerName: "Delinquencies Total",
    width: 200,
  },
  {
    field: "totalSummary",
    headerName: "Total ",
    width: 200,
  },
  {
    field: "View Site Rents",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/sites/${cellValues.row.siteId}/rents`}
        >
          View Rents Info
        </Button>
      );
    },
  },
];

export function ManagementRents() {
  const rowData = useRecoilValue(getSiteRentsSummaryInfo);

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
