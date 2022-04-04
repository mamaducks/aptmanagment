import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllUnitRentTotals } from "../data/rentsAtom";
import { useParams } from "react-router-dom";

export const columns = [
  { field: "site", headerName: "site", width: 300 },
  {
    field: "number",
    headerName: "Unit Information",
    width: 180,
  },
  {
    field: "tenant",
    headerName: "Tenant",
    width: 180,
  },
  {
    field: "totalSummary",
    headerName: "Prev Balance",
    width: 180,
  },
  {
    field: "amount",
    headerName: "Paid",
    width: 180,
  },
  {
    field: "totalSummary",
    valueGetter: ({ row }) => row.rentTotals.delinquentTotal,

    headerName: "Balance",
    width: 180,
  },
  {
    field: "View Site Rents",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          href={`/Management/${cellValues.row.siteId}/units`}
        >
          View Rents Info
        </Button>
      );
    },
  },
];

export function ManagementUnitRents() {
  const { siteId } = useParams();

  const rowData = useRecoilValue(getAllUnitRentTotals(siteId));

  return (
    <div style={{ height: 300, width: "100%" }}>
      <div>Unit Information carry over balance January </div>
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
