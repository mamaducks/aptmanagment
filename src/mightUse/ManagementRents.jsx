import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { DatePicker } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { addMonths, getMonth, getYear } from "date-fns";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currencyFormatter } from "../formatters/cellFormatters";
import { useColumns } from "../state/helpers/hooks";
import { getSiteRentsSummaryInfoForMonthYear } from "../state/rents";
import { getSiteLedgerSummaryInfo } from "../state/sites";

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
          <Button href={`/sites/${cellValues.row.siteId}/rentroll`}>
            Site Rents
          </Button>

          {/* <Button href={`/sites/${cellValues.row.siteId}/adddeposit`}>
            New Deposit
          </Button>

          <Button href={`/sites/${cellValues.row.siteId}/addpayments`}>
            Enter Payments
          </Button>

          <Button href={`/sites/${cellValues.row.siteId}/addrents`}>
            Enter Rents Due
          </Button> */}
        </Box>
      );
    },
  },
];

export function ManagementRents() {
  const columnsToUse = useColumns(columns);

  const [monthToView, setMonthToView] = useState(Date.now());
  const year = getYear(monthToView);
  const month = getMonth(monthToView);

  const rowData = useRecoilValue(
    getSiteRentsSummaryInfoForMonthYear([year, month])
  );

  return (
    <div style={{ height: 900, width: "100%" }}>
      <Box>
        <IconButton
          color="primary"
          size="large"
          onClick={() => {
            setMonthToView((current) => addMonths(current, -1));
          }}
        >
          <ArrowCircleLeftIcon fontSize="larger" sx={{ alignSelf: "center" }} />
        </IconButton>

        <FormControl>
          <FormLabel>{month}</FormLabel>

          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            value={monthToView}
            onChange={(newValue) => {
              newValue && setMonthToView(newValue);
            }}
          />
        </FormControl>

        <IconButton
          color="primary"
          size="large"
          onClick={() => {
            setMonthToView((current) => addMonths(current, 1));
          }}
        >
          <ArrowCircleRightIcon fontSize="larger" />
        </IconButton>
        <Typography textAlign="center" variant="h6">
          Sites Rent Summary
        </Typography>
      </Box>

      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
