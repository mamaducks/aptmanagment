import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { TextField } from "@mui/material";
import { rentListState } from "../data/rentsAtom"

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { textAlign } from "@mui/system";


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
      field: "amountDue",
      headerName: "Amount Due",
      width: 300,
      renderCell: (cellValues) => {
        return (
          <TextField variant="contained" color="primary">
            amount due
          </TextField>
        );
      },
    },
  
    {
      field: "amountPaid",
      headerName: "Amount Paid",
      width: 300,
      renderCell: (cellValues) => {
        return (
          <TextField variant="contained" color="primary">
            amount paid
          </TextField>
        );
      },
    },
  ];
  
  export function EnterRents() {

    const rowData = useRecoilValue(rentListState);

    return (
      <div style={{ height: 300, width: "100%" }}>
    <DataGrid getRowId={(item) => item.applicantId} rows={rowData} columns={columns} />
  </div>
    );
  }