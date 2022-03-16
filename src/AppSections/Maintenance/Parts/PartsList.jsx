import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { getWorkOrderInfo } from "../../../data/workOrderAtoms";
import { getAllParts } from "../../../data/partsAtom";

import { Box, Button, Container, DialogActions } from "@mui/material";

export default function AllPartsList() {
  const part = useRecoilValue(getAllParts);

//   const workOrderParts =  useRecoilValue(getWorkOrderParts)
  //   console.log(employee, employeeId);
  //   const [imageList, setImageList] = useState([]);

  const item = {}

  return (
    <Container maxWidth="sm">
      <List
      key="workOrderId"
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          fontSize: "larger",
          pl: 3,
          textAlign: "center",

        }}
        subheader={
          <ListSubheader sx={{ fontSize: "larger" }}>
            Parts Information
          </ListSubheader>
        }
      >
        {part.map((item) => (
          <ListItem>
            <ListItemText id="partName" primary={item.partName} />
            <ListItemText
              id="name"
              primary={item.partPrice}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export function AllParts() {
    return (
<div>
    <div>sorted alphabetically</div>
    All entered parts as list and prices 
    <div>remove or edit</div>
</div>
    );
}