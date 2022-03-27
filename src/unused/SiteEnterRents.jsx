import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllUnitsInfo } from "../data/unitsAtom";
import { fullNameValueGetter } from "../formatters/valueGetters";

export const columns = [
  { field: "site", headerName: "Site Name", width: 330 },

  {
    field: "unit",
    valueGetter: ({ row }) => row.unitInfo.number,
    headerName: "Unit",
    width: 190,
  },

  {
    field: "fullName",
    valueGetter: fullNameValueGetter,
    headerName: "Tenant",
    width: 310,
  },

  {
    field: "Enter Rents",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/site/${cellValues.row.siteId}/enterRents`}
        >
          Enter Rents
        </Button>
      );
    },
  },
  {
    field: "View Site Rents",
    width: 240,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/site/${cellValues.row.siteId}/rents`}
        >
          View Rents Info
        </Button>
      );
    },
  },
];

export function SiteEnterRents() {
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
