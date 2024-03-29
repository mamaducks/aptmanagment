import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter,
  dateTimeFormatter,
} from "../../formatters/cellFormatters";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";
import { useColumns } from "../../state/helpers/hooks";
import { getSiteWithDepositSummaryInfo } from "../../state/sites";

export const columns = [
  {
    field: "timestamp",
    headerName: "Date of Deposit",
    width: 240,
    valueFormatter: dateTimeFormatter,
  },
  {
    field: "amount",
    headerName: "Deposit Amount",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "totalNumberOfPayments",
    headerName: "# Payments",
    width: 200,
  },
];

export function SiteDeposits() {
  const { siteId } = useParams();
  const columnsToUse = useColumns(columns);
  const { deposits } = useRecoilValue(getSiteWithDepositSummaryInfo(siteId));

  return (
    <div style={{ height: 900, width: "100%" }}>
      <Typography textAlign="center" variant="h5" lineHeight={2}>
        Site Deposits as of {getCurrentMonthYearLabel()}
      </Typography>

      <DataGrid
        getRowId={(item) => item.depositId}
        rows={deposits}
        // rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
