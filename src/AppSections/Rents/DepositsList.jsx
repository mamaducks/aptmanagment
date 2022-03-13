import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function DepositsList() {
  return (
    <div>
      {" "}
      site month
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          textAlign: "center",
          alignSelf: "center",
        }}
        subheader={<ListSubheader>Deposits</ListSubheader>}
      >
        <ListItem>
          <ListItemText id="date" primary="date" />
          <ListItemText
            id="amountDeposit"
            primary="amount of deposit"
            sx={{ justifyContent: "end", display: "flex" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText id="date" primary="Date" />
          <ListItemText
            id="deposit"
            primary="$$$"
            sx={{ justifyContent: "end", display: "flex" }}
          />
        </ListItem>
      </List>
    </div>
  );
}
