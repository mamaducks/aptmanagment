import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { textAlign } from "@mui/system";

export function RentsTotalsList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 550, bgcolor: "background.paper", textAlign: "center", alignSelf: "center" }}
      subheader={<ListSubheader>Deposit Total</ListSubheader>}
    >
      <ListItem>
        <ListItemText id="rentTotalLabel" primary="Total Rents Entered" />
        <ListItemText
          id="rent-total"
          primary="$$"
          sx={{ justifyContent: "end", display: "flex" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText id="depositTotalLabel" primary="Total Deposits Entered" />
        <ListItemText
          id="depositTotal"
          primary="$$"
          sx={{ justifyContent: "end", display: "flex" }}
        />
      </ListItem>
    </List>
  );
}
