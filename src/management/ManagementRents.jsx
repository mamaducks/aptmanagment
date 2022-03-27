import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getSiteRentsSummaryInfo } from "../state/rents";
import { useColumns } from "../state/helpers/hooks";

export const columns = [
  { field: "siteName", headerName: "Site", width: 320 },
  {
    field: "rentsTotal",
    headerName: "Rents Total",
    description: "Total amount of rents due",
    width: 240,
  },
  {
    field: "paymentsTotal",
    headerName: "Payments Total",
    description: "Total amount of payments made",

    width: 200,
  },
  {
    field: "pendingDepositsTotal",
    headerName: "Pending Deposits",
    description: "Payments collected awaiting deposit",

    width: 200,
  },
 
  {
    field: "totalSummary",
    headerName: "Total Balance",
    description: "Amount due not yet collected",

    highlightPositiveNegative: true,
    width: 200,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            variant="contained"
            color="primary"
            href={`/sites/${cellValues.row.siteId}/rents`}
          >
            View Rents Info
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementRents() {
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getSiteRentsSummaryInfo);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
