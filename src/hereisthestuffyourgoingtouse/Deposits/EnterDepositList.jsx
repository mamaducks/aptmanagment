import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { textAlign } from "@mui/system";
import { TextField } from "@mui/material";
import { useRecoilValue } from "recoil";
import { deposits } from "../../data/depositAtoms";

export default function EnterDeposits() {
const deposit = useRecoilValue(deposits);

  return (
    <List
      sx={{ width: "100%", maxWidth: 550, bgcolor: "background.paper", textAlign: "center", alignSelf: "center" }}
      subheader={<ListSubheader>Site Name Deposit</ListSubheader>}
    >
      <ListItem>
      <TextField variant="filled" id="depositDate" label="Deposit Amount" sx={{ justifyContent: "end", display: "flex" }} >Deposit Amount</TextField>

        <TextField variant="filled" id="depositAmount" label="Deposit Amount" sx={{ justifyContent: "end", display: "flex" }} >Deposit Amount</TextField>
      </ListItem>
     
    </List>
  );
}