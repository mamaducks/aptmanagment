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
import { getWorkOrderParts } from "../../../data/partsAtom";

import { Box, Button, Container, DialogActions } from "@mui/material";

export default function PartWorkOrderListItem({ workOrderId }) {
  const part = useRecoilValue(getWorkOrderInfo(workOrderId));

  const workOrderParts =  useRecoilValue(getWorkOrderParts)
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
        {workOrderParts.map((item) => (
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
