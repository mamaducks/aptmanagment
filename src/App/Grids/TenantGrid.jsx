import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { tenantList } from "../../data/tenantAtoms";
import { tenants } from '../../data/tenantAtoms';


export const columns = [
  { field: 'applicantId', headerName: 'number', width: 150 },
  { field: 'lastName', headerName: 'Tenant Name', width: 150 },
  { field: 'moveInDate', headerName: 'move in', width: 150 },
  { field: 'dateLease', headerName: 'lease date', width: 150 },
  { field: 'renewalDate', headerName: 'renewal date', width: 150 },

];



export function TenantGrid() {
  const rowData = useRecoilValue(tenantList);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid getRowId={(item) => item.applicantId} rows={rowData} columns={columns} />
    </div>
  );
}
