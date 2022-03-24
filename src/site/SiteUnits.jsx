import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getUnitsInfo } from "../data/unitsAtom";

export const columns = [
  { field: "id", headerName: "Unit", width: 320 },

  {
    field: "tenantName",
    valueGetter: ({ row }) =>
      `${row.tenant?.firstName || ""} ${row.tenant?.lastName || ""}`,
    headerName: "Tenant",
    width: 240,
  },
  {
    field: "moveInDate",
    valueGetter: ({ row }) =>
      `${row.tenant?.moveInDate || ""}`,
    headerName: "Move In Date",
    width: 200,
  },
  {
    field: "leaseDate",
    valueGetter: ({ row }) =>
      `${row.tenant?.leaseDate || ""}`,
    headerName: "Lease Date",
    width: 200,
  },
  {
    field: "renewalDate",
    valueGetter: ({ row }) =>
      `${row.tenant?.renewalDate || ""}`,
    headerName: "Renewal Date",
    width: 200,
  },
];

export function SiteUnits() {
  const { siteId } = useParams();

  const rowData = useRecoilValue(getUnitsInfo(siteId))?.units || [];

  

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid getRowId={(item) => item.id} rows={rowData} columns={columns} />
    </div>
  );
}
