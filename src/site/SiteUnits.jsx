import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { dateFormatter } from "../formatters/cellFormatters";
import { SiteHeader } from "./SiteHeader";
import { SiteAddress } from "./SiteAddress";

export const columns = [
  { field: "unitId", headerName: "Unit", width: 140 },

  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 300,
  },
  {
    field: "dateMoveIn",
    headerName: "Move In Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "dateLease",
    headerName: "Lease Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "dateRenewal",
    headerName: "Renewal Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "dateMoveOut",
    headerName: "Move Out Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
];

export function SiteUnits() {
  const { siteId } = useParams();

  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />
      <SiteAddress />

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={siteWithUnits.units}
        columns={columns}
      />
    </div>
  );
}
