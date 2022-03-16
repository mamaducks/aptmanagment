import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { getAllBillsInfo } from "../../../data/billAtoms";
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

export function Bill() {
  const [bill, setBill] = useRecoilState(getAllBillsInfo);
  const [newBill, setNewBill] = useState({});

  
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
        setNewBill((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: newBill[name],
      };
    },
    [newBill]
  );

  const addBill = useCallback(() => {
    setBill((bills) => [...bills, newBill]);
  }, [newBill, setBill]);

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
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              {...addProps({ name: "dateRequest", label: "Date Requested" })}
            />
          </Box>

          <FormControl>
            <FormLabel id="site">Site</FormLabel>
            <div>date</div>
            <div>
              type of bill category , subcategory if there flooring painting
              appliances snow lawn vehicle trash electric phones internet
              contractors

              <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "category", label: "Category" })}
          />
            </div>
          </FormControl>
        </Stack>
        <Stack direction="row"></Stack>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "recipient", label: "Paid To" })}
          />
        </Box>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "amountPaid", label: "Amount Paid" })}
          />
        </Box>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              margin="normal"
              {...addProps({
                name: "datePaid",
                label: "datePaid",
                type: "number",
              })}
            />
          </Box>
        </Stack>

        {/* <Box display="flex" gap={7}> */}

        <FormControl>
          <FormLabel id="site">billed to site if site</FormLabel>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "site", label: "Site", type: "text" })}
          />
        </FormControl>
        {/* </Box>
<Stack sx={{ border: "1px solid black", p: 1 }}>

  <Stack direction="row" gap={7}>

    <FormControl margin="dense">
      <FormLabel id="familySize">Parts</FormLabel>
     <div>add part</div>
    </FormControl>

    

  </Stack>

  <FormControl margin="dense" >
    <FormLabel id="familySize">Costs</FormLabel>
    <div>add cost</div>
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

  </Stack> */}

        <button onClick={addBill}>Add</button>
        <button>print</button>

        <div>
          add contractor info/fees? and gl codes?? gl codes ids enter vehicle
          maintenance maybe vehicle site ? enter snow/ lawn care / snow or lawn
          enter Appliances / type of appliance enter flooring / carpet or tile
          other bills maybe? trash, electric, phone/internet bills type of
          category , subcategory if there paid to amount paid date paid totals
          of category / sub if there bills categories
        </div>
      </Paper>
    </>
  );
}
