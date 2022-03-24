import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getBillsInfo, getBillsInfoNew } from "../../data/billAtoms";

export const columns = [
//   { field: "id", headerName: "Unit", width: 320 },


  {
    field: "total",
    valueGetter: ({ row }) =>
      `${(row.categories.total || 0).toLocaleString()}`,
    headerName: "Total",
    width: 200,
  },
  {
    field: "desc",
    valueGetter: ({ row }) =>
      `${row.categories.desc || ""}`,
    headerName: "Des",
    width: 200,
  },
 
];

export function ManagementBills() {
    const rowData = useRecoilValue(getBillsInfoNew);


  

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid getRowId={(item) => item.categoryId} rows={rowData} columns={columns} />
    </div>
  );
}
