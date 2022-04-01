import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import {
  getSiteRentsSummaryInfo,
  getSiteRentsSummaryInfoForMonthYear,
} from "../state/rents";
import { useColumns } from "../state/helpers/hooks";
import { currencyFormatter } from "../formatters/cellFormatters";
import { FormRent } from "../forms/FormRent";
import { getSiteLedgerSummaryInfo } from "../state/sites";
import { useState } from "react";
import { ButtonUnstyled } from "@mui/base";
import { DatePicker } from "@mui/lab";
import { addMonths, getMonth, getYear } from "date-fns";

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
            Rent Roll
          </Button>

          <Button href={`/sites/${cellValues.row.siteId}/adddeposit`}>
            New Deposit
          </Button>

          <Button href={`/sites/${cellValues.row.siteId}/addpayments`}>
            Enter Payments
          </Button>

          <Button href={`/sites/${cellValues.row.siteId}/addrents`}>
            Enter Rents Due
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementRents() {
  const columnsToUse = useColumns(columns);
  // const rowData = useRecoilValue(getSiteRentsSummaryInfo);

  const myStueff = useRecoilValue(getSiteLedgerSummaryInfo);

  const [monthToView, setMonthToView] = useState(Date.now());
  const year = getYear(monthToView);
  const month = getMonth(monthToView);

  const rowData = useRecoilValue(
    getSiteRentsSummaryInfoForMonthYear([year, month])
  );

  console.log(
    monthToView,
    myStueff,
    getYear(monthToView),
    getMonth(monthToView),
    rowData
  );

  return (
    <div style={{ height: 300, width: "100%" }}>
      <Button
        onClick={() => {
          setMonthToView((current) => addMonths(current, -1));
        }}
      >
        &lt;
      </Button>

      <FormControl>
        <FormLabel>Date of Deposit</FormLabel>

        <DatePicker
          renderInput={(props) => <TextField {...props} />}
          value={monthToView}
          onChange={(newValue) => {
            newValue && setMonthToView(newValue);
          }}
        />
      </FormControl>

      <Button
        onClick={() => {
          setMonthToView((current) => addMonths(current, 1));
        }}
      >
        &gt;
      </Button>

      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
