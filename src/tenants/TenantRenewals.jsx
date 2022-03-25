import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { tenantList } from "../data/tenantAtoms";


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
      field: "moveInDate",
      valueGetter: ({ row }) =>
        `${row.tenant?.moveInDate || ""}`,
      headerName: "Move In Date",
      width: 200,
    },
    {
      field: "dateLease",
      valueGetter: ({ row }) =>
        `${row.tenant?.leaseDate || ""}`,
      headerName: "Lease Date",
      width: 200,
    },
    {
      field: "renewalDate",
      valueGetter: ({ row }) =>
        `${row.tenant?.renewalDate || ""}`,
      headerName: "Renewal Date",
      width: 200,
    },
    {
      field: "View Site Rents",
      width: 300,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            href={`/Tenants/${cellValues.row.tenantId}/`}
          >
            Update Tenant
          </Button>
        );
      },
    },

  ];



export function TenantRenewals() {
  const rowData = useRecoilValue(tenantList);

  return (
    <div style={{ height: 300, width: "100%" }}>
        <div>Tenant Renewals This Month</div>
      <DataGrid getRowId={(item) => item.applicantId} rows={rowData} columns={columns} />
    </div>
  );
}