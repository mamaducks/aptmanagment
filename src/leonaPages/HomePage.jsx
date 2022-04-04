import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { SiteButtonHeader } from "../headers/SiteButtonHeader";
import { ManagementRents } from "../mightUse/ManagementRents";
import { sites } from "../state/sites";
// import { getSiteApplicantsSummaryInfo } from "../state/sites";

export const columns = [
  { field: "siteName", headerName: "Site Name", width: 320 },

  {
    field: "rentsAction",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Rent",
    width: 260,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            href={`/sites/${cellValues.row.siteId}/rentroll`}
            variant="contained"
            sx={{ textDecoration: "none" }}
          >
            Rents
          </Button>
        </Box>
      );
    },
  },
  {
    field: "depositAction",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Deposits",
    width: 260,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            href={`/sites/${cellValues.row.siteId}/deposits`}
            variant="contained"
            sx={{ textDecoration: "none" }}
          >
            Deposits
          </Button>
        </Box>
      );
    },
  },
  {
    field: "tenantAction",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Site Info",
    width: 260,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            href={`/sites/${cellValues.row.siteId}/units`}
            variant="contained"
            sx={{ textDecoration: "none" }}
          >
            Units
          </Button>
        </Box>
      );
    },
  },
];

export function SitesDashboard() {
  const rowData = useRecoilValue(sites);

  return (
    <>
      <Typography variant="h5">Lower County Property Management</Typography>
      <Stack>
        <Button href={`/management/rents`}>Rents Overview</Button>
        <Button href={`/management/sites`}>Sites Overview</Button>
        <Button href={`/applicants`}>Applicants</Button>
        <Button href={`/employees`}>Employees</Button>
      </Stack>

      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          getRowId={(item) => item.siteId}
          rows={rowData}
          columns={columns}
        />
      </div>
    </>
  );
}

export function HomePage() {
  return <div>hoommmeee</div>;
}
