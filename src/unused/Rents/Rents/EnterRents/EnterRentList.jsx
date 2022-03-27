import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { textAlign } from "@mui/system";
import { TextField } from "@mui/material";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { tenantList } from "../data/tenantAtoms";

export default function EnterRentList() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        textAlign: "center",
        alignSelf: "center",
      }}
      subheader={<ListSubheader>Enter Rents</ListSubheader>}
    >
      <ListItem>
        <ListItem>
          <ListItemText id="unit" primary="unit #" />
        </ListItem>
        <ListItem>
          <ListItemText id="lastName" primary="last name" />
        </ListItem>

        <ListItem>
          <TextField id="amountDue" label=" $ Amount Due" variant="outlined" />
        </ListItem>

        <ListItem>
          <TextField id="amountPaid" label="$ Amount Paid" variant="outlined" />
        </ListItem>
        {/* <ListItemText id="amountDue" primary="Amount Due" /> */}

        {/* <ListItemText
          id="amountPaid"
          primary="Amount Paid"
        /> */}
      </ListItem>
    </List>
  );
}

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
    field: "View Site Rents",
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
    field: "View Site Rents",
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
  return (
    <div style={{ height: 300, width: "100%" }}>
  <DataGrid getRowId={(item) => item.applicantId} rows={rowData} columns={columns} />
</div>
  );
}
