import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
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
import { getAllHours } from "../../../newUnused/data/workOrderHoursAtoms";
import { useCallback, useState } from "react";
import {  allHours, getHoursState } from "../../../newUnused/data/workOrderHoursAtoms";


export function WorkHoursList() {
  const workOrderHours =  useRecoilValue(allHours)

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
            Hours Information
          </ListSubheader>
        }
      >
        {workOrderHours.map((item) => (
          <ListItem>
            <ListItemText id="partName" primary={item.employeeName} />
            <ListItemText
              id="name"
              primary={item.hoursBilled}
              // sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}


function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function WorkOrderHours({workOrderId}) {
  const [hoursTotal, setHoursTotal] = useRecoilState(allHours);
  //const index = applicantList.findIndex((listItem) => listItem === item);
  const oldOrder = useRecoilValue(getHoursState(workOrderId));
  const index = hoursTotal.findIndex(
    (listItem) => listItem.workOrderId === workOrderId
  );
 
  const [hour, setHours] = useState({});

  console.log("item", hoursTotal, hour);

  

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
        setHours((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: hour[name],
      };
    },
    [hour]
  );

  const addHours = useCallback(() => {
    setHoursTotal((current) => replaceItemAtIndex(current, index, hour));
  }, [hour, index, setHoursTotal]);

  return (
    <Paper sx={{ p: "30px" }}>



      <Stack direction="row" gap={4}>
        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            {...addProps({ name: "employeeId", label: "Employee" })}
          />
        </Box>
      </Stack>
      <Stack direction="row"></Stack>
      <Box sx={{ width: "850px" }}>
        <TextField
          fullWidth
          margin="normal"
          {...addProps({ name: "hours", label: "Hours" })}
        />
      </Box>

     

      <button onClick={addHours}>Submit</button>
      <br />
      <div> entered hours list</div>
    </Paper>
  );
}
