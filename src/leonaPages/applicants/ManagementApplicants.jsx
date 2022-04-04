import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { SiteButtonHeader } from "../../headers/SiteButtonHeader";
import { useColumns } from "../../state/helpers/hooks";
import { getSiteApplicantsSummaryInfo } from "../../state/sites";


export const columns = [
  { field: "siteName", headerName: "Site Name", width: 320 },
  {
    field: "totalNumberOfVacantUnits",
    headerName: "# Vacant",
    width: 130,
  },
  {
    field: "totalNumberOfWaitingApplicants",
    headerName: "# Waiting",
    width: 130,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 260,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/sites/${cellValues.row.siteId}/applicants`}>
            View Applicants
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementApplicants() {
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getSiteApplicantsSummaryInfo);

  return (
    <div style={{ height: 900, width: "100%" }}>

      <Button href="/" startIcon={<ArrowBackIosIcon />}>
            Back to All Sites
          </Button>

      <SiteButtonHeader
        title="Waiting Lists"
        href="/forms/applicant/"
        label="Add New Applicant"
      />

      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
