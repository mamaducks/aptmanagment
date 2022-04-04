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

import {
  Box,
  Button,
  Container,
  DialogActions,
  ListItemButton,
} from "@mui/material";
import { Parts } from "../../../hereisthestuffyourgoingtouse/Parts";

export default function AllPartsList() {
  const part = useRecoilValue(getAllParts);

  //   const workOrderParts =  useRecoilValue(getWorkOrderParts)
  //   console.log(employee, employeeId);
  //   const [imageList, setImageList] = useState([]);

  const item = {};

  return (
    <Container maxWidth="md">
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
          <Box display="flex" justifyContent="space-evenly">
            <ListSubheader  sx={{ fontSize: "larger" }}>
              Parts Information
            </ListSubheader>
            <Button>Add New</Button>
          </Box>
        }
      >
        {part.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <Box display="flex">
                <ListItemButton>Edit</ListItemButton>
                <ListItemButton>Delete</ListItemButton>
              </Box>
            }
          >
            <ListItemText id="partName" primary={item.partName} secondary={item.partPrice}/>
            {/* <ListItemText
              id="name"
              primary={item.partPrice}
              // sx={{ display: "flex", justifyContent: "flex-end" }}
            /> */}
           
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
      <Parts />
      <AllPartsList />
    </div>
  );
}
