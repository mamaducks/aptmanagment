import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { fullNameValueGetter } from "../formatters/valueGetters";

import { SiteHeader } from "./SiteHeader";

export const columns = [
  { field: "unitId", headerName: "Unit", width: 320 },

  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 240,
  },
  {
    field: "rentsTotal",
    headerName: "Rent Due",
    width: 200,
  },
  {
    field: "paymentsTotal",
    headerName: "Rent Paid",
    width: 200,
  },

  {
    field: "totalSummary",
    headerName: "Total Summary",
    width: 200,
  },
];

export function SiteRents() {
  const { siteId } = useParams();

  const rowData = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={rowData.units}
        columns={columns}
      />
    </div>
  );
}
