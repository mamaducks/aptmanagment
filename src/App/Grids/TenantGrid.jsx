import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getTenantsWithId } from "../../state/tenants";

export const columns = [
  { field: "siteId", headerName: "Site", width: 150 },
  { field: "unitId", headerName: "Unit", width: 150 },
  { field: "tenantId", headerName: "Tenant Name", width: 150 },
  { field: "dateLease", headerName: "Lease date", width: 150 },
  { field: "dateRenewal", headerName: "Renewal date", width: 150 },
];

export function TenantGrid() {
  const rowData = useRecoilValue(getTenantsWithId);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.applicantId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
