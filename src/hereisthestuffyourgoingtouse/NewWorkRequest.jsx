// import { TodoList } from "../../../App/Todo/ToDo";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
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
import { Parts } from "./Parts";
import { WorkOrderHours } from "./Billing/NewWorkOrder/WorkOrderHours";
import { allWorkOrderBills } from "../data/workOrderAtoms";

export function NewRequest() {
  const [workOrder, setWorkOrder] = useRecoilState(allWorkOrderBills);

  const [order, setOrder] = useState({});



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
    setWorkOrder((orders) => [...orders, order]);
  }, [order, setWorkOrder]);

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
              {...addProps({ name: "workOrderId", label: "work order id" })}
            />
            <TextField
              fullWidth
              {...addProps({ name: "dateRequest", label: "Date Requested" })}
            />
          </Box>

          <FormControl>
            <FormLabel id="site">Site</FormLabel>
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
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "tenant", label: "Tenant" })}
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
        <Box display="flex" gap={7}>
          <FormControl>
            <FormLabel id="remarks">Remarks</FormLabel>
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
        <div>want option to assign maintenance employee?</div>
        <button onClick={addOrder}>Add</button>
        <button>print</button>
      </Paper>
    </>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
