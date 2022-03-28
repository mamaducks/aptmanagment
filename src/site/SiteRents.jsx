import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useColumns } from "../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { SiteHeader } from "./SiteHeader";
import { currencyFormatter } from "../formatters/cellFormatters";

export const columns = [
  { field: "unitId", headerName: "Unit", width: 140 },

  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 420,
  },
  {
    field: "rentsTotal",
    headerName: "Rent Due",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "paymentsTotal",
    headerName: "Rent Paid",
    valueFormatter: currencyFormatter,
    width: 200,
  },

  {
    field: "totalSummary",
    headerName: "Total Summary",
    description: "Carry Over Balance",
    valueFormatter: currencyFormatter,
    highlightPositiveNegative: true,
    width: 200,
  },
];

export function SiteRents() {
  const { siteId } = useParams();
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={rowData.units}
        columns={columnsToUse}
      />
    </div>
  );
}
