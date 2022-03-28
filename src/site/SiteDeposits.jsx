import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useColumns } from "../state/helpers/hooks";
import { getSiteWithDepositSummaryInfo } from "../state/sites";
import { SiteHeader } from "./SiteHeader";
import {
  currencyFormatter,
  dateTimeFormatter,
} from "../formatters/cellFormatters";

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
  console.log(deposits);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

      <DataGrid
        getRowId={(item) => item.depositId}
        rows={deposits}
        columns={columnsToUse}
      />
    </div>
  );
}
