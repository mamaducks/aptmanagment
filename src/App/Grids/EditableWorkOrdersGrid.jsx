import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { allWorkOrders } from "../../data/workOrderAtoms";

export const columns = [
//   { field: 'siteId', headerName: 'number', width: 130 },
  { field: 'site', headerName: 'Site', width: 180 },
  { field: 'dateRequest', headerName: 'Date Requested', width: 180 },
  { field: 'workOrderId', headerName: 'Work Order #', width: 180 },
  { field: 'totalHours', headerName: 'Hours Billed', width: 180 },
  { field: 'totalPartPrice', headerName: 'Parts Total', width: 180 },
  { field: 'totalPartsHours', headerName: 'Total Billed', width: 180 },
  { field: 'workStatus', headerName: 'Status', width: 180 },
  
];



export function WorkOrderGrid() {
  const rowData = useRecoilValue(allWorkOrders);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid getRowId={(item) => item.workOrderId} rows={rowData} columns={columns} />
    </div>
  );
}