import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllUnitRentTotals } from "../data/rentsAtom";
import { useParams } from "react-router-dom";

export const columns = [
  {
    field: "id",
    headerName: "Unit",
    width: 180,
  },
  {
    field: "tenant",
    headerName: "Tenant",
    width: 180,
    valueGetter: ({ row }) =>
      `${row.tenant?.firstName || ""} ${row.tenant?.lastName || ""}`,
  },
  {
    field: "rent",
    headerName: "Rent",
    valueGetter: ({ row }) => row.totals.rentsTotal,
    width: 180,
  },
  {
    field: "amount",
    headerName: "Paid",
    valueGetter: ({ row }) => row.totals.paymentsTotal,
    width: 180,
  },
  {
    field: "totalSummary",
    valueGetter: ({ row }) => row.totals.totalSummary,
    headerName: "Balance",
    width: 180,
  },
];

export function SiteRents() {
  const { siteId } = useParams();

  const rowData = useRecoilValue(getAllUnitRentTotals(siteId));

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid getRowId={(item) => item.id} rows={rowData} columns={columns} />
    </div>
  );
}
