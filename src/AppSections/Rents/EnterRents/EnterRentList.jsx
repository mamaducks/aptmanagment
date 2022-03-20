import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { textAlign } from "@mui/system";

export default function EnterRentList() {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", textAlign: "center", alignSelf: "center" }}
      subheader={<ListSubheader>Enter Rents</ListSubheader>}
    >
      <ListItem>
        <ListItemText id="unit" primary="unit #" />
        <ListItemText
          id="lastName"
          primary="last name"
        />
         <ListItemText id="amountDue" primary="Amount Due" />
        <ListItemText
          id="amountPaid"
          primary="Amount Paid"
        />
      </ListItem>

      
    </List>
  );
}