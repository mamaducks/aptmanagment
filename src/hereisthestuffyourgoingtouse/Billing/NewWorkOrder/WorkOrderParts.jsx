import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    Stack,
    TextField,
  } from "@mui/material";
  import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";
  import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {  Button, Container, DialogActions } from "@mui/material";

  import { getAllParts } from "../../../data/partsAtom";
  import { useCallback, useState } from "react";
  import { getWorkOrderInfo } from "../../data/workOrderAtoms";
import { PartWorkOrderListItem} from "../PartWorkOrderListItem";
import { getWorkOrderParts } from "../../data/partsAtom";


  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  export function Parts({workOrderId}) {
    const [partsList, setPartsList] = useRecoilState(getAllParts);
    //const index = applicantList.findIndex((listItem) => listItem === item);

    const oldOrder = useRecoilValue(getWorkOrderInfo(workOrderId));
    const index = partsList.findIndex(
      (listItem) => listItem.workOrderId === workOrderId
    );
    
    const [part, setPart] = useState(oldOrder || {});
  
    const workOrderParts =  useRecoilValue(getWorkOrderParts)

    console.log("item", partsList, part);
  
    // const toggleItemStatus = () => {
    //   const newList = replaceItemAtIndex(applicantList, index, {
    //     ...item,
    //     isPending: !item.isPending,
    //   });
  
    //   setApplicantList(newList);
    // };
  
    // const deleteItem = () => {
    //   const newList = removeItemAtIndex(applicantList, index);
  
    //   setApplicantList(newList);
    // };
  
    const addProps = useCallback(
      ({ name, label, type = "text" }) => {
        const setFieldValue = ({ target: { name, value } }) =>
          setPart((item) => ({ ...item, [name]: value }));
  
        return {
          label,
          name,
          type,
          onChange: setFieldValue,
          value: part[name],
        };
      },
      [part]
    );
  
    const addPart = useCallback(() => {
      setPartsList((current) => replaceItemAtIndex(current, index, part));
    },  [part, index, setPartsList]);
  
    return (
      <Paper sx={{ p: "30px" }} >

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



        
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              {...addProps({ name: "partName", label: "Part" })}
            />
          </Box>
        </Stack>
        <Stack direction="row"></Stack>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "partPrice", label: "Price" })}
          />
        </Box>
  
        <button onClick={addPart}>Submit</button>
        <br />
        <div> entered parts list</div>
      </Paper>
    );
  }
  