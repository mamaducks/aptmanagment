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
import { allEmployees } from "../../../data/employeesAtoms";
import { useCallback, useState } from "react";

export function Rent() {
  const [rentList, setRentList] = useRecoilState(allEmployees);
  //const index = applicantList.findIndex((listItem) => listItem === item);
  const [item, setItem] = useState({});

  console.log("item", rentList, item);

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
        setItem((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: item[name],
      };
    },
    [item]
  );

  const addRent = useCallback(() => {
    setRentList((rent) => [...rent, item]);
  }, [item, setRentList]);

  return (
    <Paper sx={{ p: "30px" }}>
      <Box sx={{ width: "500px" }}>
        <TextField
          fullWidth
          {...addProps({ name: "amountDue", label: "Amount Due" })}
        />
      </Box>

      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "amountPaid", label: "Amount Paid" })}
          />
        </Box>

        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "credit", label: "Credit", type: "number" })}
          />
        </Box>
      </Stack>

      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "delinquent", label: "Delinquent" })}
          />
        </Box>

        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "tenant", label: "Tenant", type: "text" })}
          />
        </Box>
      </Stack>

      <Stack sx={{ border: "1px solid black", p: 1 }}>
        <FormControl margin="dense">
          <FormLabel id="employeeType">Month</FormLabel>
          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "employeeType", label: "employeeType" })}
          >
            <FormControlLabel
              value="vacant"
              control={<Radio />}
              label="Vacant"
            />
            <FormControlLabel value="site" control={<Radio />} label="site" />
            <FormControlLabel value="unit" control={<Radio />} label="unit" />
          </RadioGroup>
        </FormControl>
      </Stack>

      <button onClick={addRent}>Add</button>
      <button>upload deposit slip</button>
    </Paper>
  );
}
