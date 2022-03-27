import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { TextField } from "@mui/material";


export function EnterDeposits() {

  return (
    <List
    key="index"
      sx={{ width: "100%", maxWidth: 550, bgcolor: "background.paper", textAlign: "center", alignSelf: "center" }}
      subheader={<ListSubheader>Site Name Deposit</ListSubheader>}
    >
      <ListItem sx={{gap: 3}}>
      <TextField variant="outlined" id="timestamp" label="Date of Deposit" sx={{ display: "flex" }} >Deposit Amount</TextField>

        <TextField variant="outlined" id="depositAmount" label="Deposit Amount" sx={{ justifyContent: "end", display: "flex" }} >Deposit Amount</TextField>
      </ListItem>
      <ListItem sx={{gap: 3}}>
      <TextField variant="outlined" id="timestamp" label="Date of Deposit" sx={{ display: "flex" }} >Deposit Amount</TextField>

        <TextField variant="outlined" id="depositAmount" label="Deposit Amount" sx={{ justifyContent: "end", display: "flex" }} >Deposit Amount</TextField>
      </ListItem>
    </List>
  );
}