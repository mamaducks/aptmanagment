import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllUnitsInfo } from "../data/unitsAtom";

export const columns = [
  { field: "site", headerName: "Site Name", width: 320 },

  {
    field: "totalNum",
    valueGetter: ({ row }) => row.unitInfo.totalNum,
    headerName: "# Units",
    width: 190,
  },

  {
    field: "totalVacantNum",
    valueGetter: ({ row }) => row.unitInfo.totalVacantNum,
    headerName: "# Vacant",
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
          href={`/site/${cellValues.row.siteId}/units`}
        >
          View Units Info
        </Button>
      );
    },
  },
];

export function ManagementSites() {
  const rowData = useRecoilValue(getAllUnitsInfo);

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
