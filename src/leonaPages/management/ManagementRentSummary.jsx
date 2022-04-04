import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Box,
  Button
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { currencyFormatter } from "../../formatters/cellFormatters";
import { useColumns } from "../../state/helpers/hooks";
import {
  getSiteRentsSummaryInfo
} from "../../state/rents";



export const columns = [
  { field: "siteName", headerName: "Site", width: 320 },
  {
    field: "rentsTotal",
    headerName: "Rents Total",
    valueFormatter: currencyFormatter,
    description: "Total amount of rents due",
    width: 240,
  },
  {
    field: "paymentsTotal",
    headerName: "Payments Total",
    valueFormatter: currencyFormatter,
    description: "Total amount of payments made",
    width: 200,
  },
  {
    field: "pendingDepositsTotal",
    headerName: "Pending Deposits",
    valueFormatter: currencyFormatter,
    description: "Payments collected awaiting deposit",
    width: 200,
  },

  {
    field: "totalSummary",
    headerName: "Total Balance",
    valueFormatter: currencyFormatter,
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
    width: 450,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/management/rents/sites/${cellValues.row.siteId}/siteLedger`}>
            Site Rents
          </Button>

          {/* <Button href={`/sites/${cellValues.row.siteId}/rentroll`}>
            Site Rents
          </Button> */}
        </Box>
      );
    },
  },
];

export function ManagementRentSummary() {
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getSiteRentsSummaryInfo);

  return (
    <div style={{ height: 1000, width: "100%" }}>
      <Button href="/" startIcon={<ArrowBackIosIcon />}>
        Back to All Sites
      </Button>
     
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}