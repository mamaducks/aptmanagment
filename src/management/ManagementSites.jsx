import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getSiteTenantSummaryInfo } from "../state/sites";

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
    field: "View Units Info",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/sites/${cellValues.row.siteId}/units`}
        >
          View Units Info
        </Button>
      );
    },
  },
];

export function ManagementSites() {
  const rowData = useRecoilValue(getSiteTenantSummaryInfo);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
