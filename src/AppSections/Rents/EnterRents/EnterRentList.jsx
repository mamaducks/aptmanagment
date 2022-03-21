import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { textAlign } from "@mui/system";
import { TextField } from "@mui/material";

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
