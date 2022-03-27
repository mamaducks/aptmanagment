import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getUpcomingRenewalTenantsSummaryInfo } from "../state/sites";
import { dateFormatter } from "../formatters/cellFormatters";

export const columns = [
  { field: "siteName", headerName: "Site", width: 150 },
  { field: "unitId", headerName: "Unit", width: 150 },
  { field: "firstName", headerName: "First Name", width: 240 },
  { field: "lastName", headerName: "Last Name", width: 240 },
  {
    field: "dateLease",
    headerName: "Lease date",
    valueFormatter: dateFormatter,
    width: 150,
  },
  {
    field: "dateRenewal",
    headerName: "Renewal date",
    valueFormatter: dateFormatter,
    width: 150,
  },

  // {
  //   field: "View Site Rents",
  //   width: 300,
  //   renderCell: (cellValues) => {
  //     return (
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         href={`/Tenants/${cellValues.row.tenantId}/`}
  //       >
  //         Update Tenant
  //       </Button>
  //     );
  //   },
  // },
];

export function TenantRenewals() {
  const rowData = useRecoilValue(getUpcomingRenewalTenantsSummaryInfo);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <div>Tenant Renewals This Month</div>
      <DataGrid
        getRowId={(item) => item.applicantId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
