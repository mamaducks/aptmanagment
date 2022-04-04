import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter,
  dateTimeFormatter,
} from "../../formatters/cellFormatters";
import { getSiteDepositsSummaryInfo } from "../../state/deposits";
import { useColumns } from "../../state/helpers/hooks";

export const columns = [
  { field: "siteName", headerName: "Site", width: 340 },
  {
    field: "lastDepositDate",
    headerName: "Date of Last Deposit",
    valueFormatter: dateTimeFormatter,
    width: 200,
  },
  {
    field: "lastDepositAmount",
    headerName: "Amount Last Deposited",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "pendingDepositsTotal",
    headerName: "Pending Deposit Amount",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "pendingPaymentsAmount",
    headerName: "Pending Payments",
    width: 200,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 280,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/sites/${cellValues.row.siteId}/deposits`}>
            View Deposits
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementDeposits() {
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getSiteDepositsSummaryInfo);

  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
