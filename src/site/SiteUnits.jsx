import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tenants } from "../state/tenants"

export const columns = [
  { field: "id", headerName: "Unit", width: 320 },

  {
    field: "tenantName",
    valueGetter: ({ row }) =>
      `${row.tenant?.firstName || ""} ${row.tenant?.lastName || ""}`,
    headerName: "Tenant",
    width: 240,
  },
  {
    field: "dateMoveIn",
    valueGetter: ({ row }) =>
      `${row.tenant?.dateMoveIn || ""}`,
    headerName: "Move In Date",
    width: 200,
  },
  {
    field: "dateLease",
    valueGetter: ({ row }) =>
      `${row.tenant?.dateLease || ""}`,
    headerName: "Lease Date",
    width: 200,
  },
  {
    field: "dateRenewal",
    valueGetter: ({ row }) =>
      `${row.tenant?.dateRenewal || ""}`,
    headerName: "Renewal Date",
    width: 200,
  },
];

export function SiteUnits() {
  const { siteId } = useParams();

  // const rowData = useRecoilValue(siteUnitTenantWithApplicantMap(siteId))?.units || [];

  const rowData = useRecoilValue(tenants(siteId))


  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid getRowId={(item) => item.id} rows={rowData} columns={columns} />
    </div>
  );
}
