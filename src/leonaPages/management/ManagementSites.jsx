import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getSiteTenantSummaryInfo } from "../../state/sites";
import { useColumns } from "../../state/helpers/hooks";
import { RowHeader } from "../../headers/RowHeader";

export const columns = [
  { field: "siteName", headerName: "Site Name", width: 320 },
  {
    field: "totalNumberOfUnits",
    headerName: "# Units",
    width: 190,
  },
  {
    field: "totalNumberOfOccupiedUnits",
    headerName: "# Filled",
    width: 190,
  },
  {
    field: "totalNumberOfVacantUnits",
    headerName: "# Vacant",
    width: 130,
  },
  {
    field: "totalPercentOccupied",
    headerName: "% Occupancy",
    width: 130,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/sites/${cellValues.row.siteId}/units`}>
            View Units Info
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementSites() {
  const columnsToUse = useColumns(columns);
  const rowData = useRecoilValue(getSiteTenantSummaryInfo);

  return (
    <div style={{ height: 900, width: "100%" }}>
     
      <RowHeader label="Sites Overview" />
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
