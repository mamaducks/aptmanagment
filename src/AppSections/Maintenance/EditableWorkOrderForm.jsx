import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { workOrderState } from "../../data/workOrderAtoms";
import { useCallback, useState } from "react";
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { Parts } from "./NewWorkOrder/Parts";
import { WorkOrderHours } from "./NewWorkOrder/WorkOrderHours";

export function EditableWorkOrder() {
  const [todoList, setTodoList] = useRecoilState(workOrderState);
  const [order, setOrder] = useState({});

  // const index = todoList.findIndex((listItem) => listItem === item);

  // const editItemText = ({target: {value}}) => {
  //   const newList = replaceItemAtIndex(todoList, index, {
  //     ...item,
  //     text: value,
  //   });

  //   setTodoList(newList);
  // };

  // const toggleItemCompletion = () => {
  //   const newList = replaceItemAtIndex(todoList, index, {
  //     ...item,
  //     isComplete: !item.isComplete,
  //   });

  //   setTodoList(newList);
  // };

  // const deleteItem = () => {
  //   const newList = removeItemAtIndex(todoList, index);

  //   setTodoList(newList);
  // };

  const addProps = useCallback(
    ({ name, label, type = "text" }) => {
      const setFieldValue = ({ target: { name, value } }) =>
        setOrder((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: order[name],
      };
    },
    [order]
  );

  const addOrder = useCallback(() => {
    setTodoList((orders) => [...orders, order]);
  }, [order, setTodoList]);

  return (
    <>
      {/* <div>
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
      </div> */}

      <Paper sx={{ p: "30px" }}>
        user supervisor id user employee id
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              {...addProps({ name: "dateRequest", label: "Date Requested" })}
            />
          </Box>

          <FormControl>
            <FormLabel id="status">Site</FormLabel>
            <div>site</div>
            <div>unit</div>
          </FormControl>
        </Stack>
        <Stack direction="row"></Stack>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "site", label: "Site" })}
          />
        </Box>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "unit", label: "Unit" })}
          />
        </Box>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              margin="normal"
              {...addProps({ name: "phone", label: "Phone", type: "number" })}
            />
          </Box>
        </Stack>
        <Box display="flex" gap={7}>
          <FormControl>
            <FormLabel id="request">Request</FormLabel>
            <TextField
              fullWidth
              margin="normal"
              {...addProps({
                name: "request",
                label: "Work Requested",
                type: "text",
              })}
            />
          </FormControl>
        </Box>
        <Stack sx={{ border: "1px solid black", p: 1 }}>
          <Stack direction="row" gap={7}>
            <FormControl margin="dense">
              <FormLabel id="familySize">Parts</FormLabel>
              <div>add part</div>
              <Parts />
            </FormControl>
          </Stack>

          <FormControl margin="dense">
            <FormLabel id="familySize">Hours</FormLabel>
            <div>add hours</div>
            <WorkOrderHours />
          </FormControl>
        </Stack>
        <Stack sx={{ border: "1px solid black", p: 1 }}>
          <FormControl>
            <FormLabel id="prefer">employee</FormLabel>
            <FormGroup row>
              <div>employees that worked</div>
            </FormGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="accomodate">employee hours</FormLabel>

            <div>hours worked</div>
          </FormControl>
        </Stack>
        <button onClick={addOrder}>Add</button>
        <button>print</button>
      </Paper>
    </>
  );
}
