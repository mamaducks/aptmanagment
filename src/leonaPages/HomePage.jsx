import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { useColumns } from "../state/helpers/hooks";
import { sites } from "../state/sites";

export const columns = [
  { field: "siteName", headerName: "Site Name", width: 320 },

  {
    field: "rentsAction",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Rent",
    width: 180,
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
    width: 180,
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
    width: 180,
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
  const columnsToUse = useColumns(columns)
  const rowData = useRecoilValue(sites);

  return (
    <>
     <Stack pb={4} pr={5} pt={5}>
      <Typography variant="h5" p={5} >Lower County Property Management</Typography>
     
        <Button href={`/management/rents`}>Rents Overview</Button>
        <Button href={`/management/sites`}>Sites Overview</Button>
        <Button href={`/applicants`}>Applicants</Button>
        <Button href={`/employees`}>Employees</Button>
      </Stack>

      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          getRowId={(item) => item.siteId}
          rows={rowData}
          columns={columnsToUse}
        />
      </div>
    </>
  );
}

export function HomePage() {
  return <div>hoommmeee</div>;
}
