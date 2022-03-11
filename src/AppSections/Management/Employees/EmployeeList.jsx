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
import { employeeListState } from "../../../data/employeeAtoms";
import { useCallback, useState } from "react";

export function Employee() {
  const [employeeList, setEmployeeList] = useRecoilState(employeeListState);
  //const index = applicantList.findIndex((listItem) => listItem === item);
  const [item, setItem] = useState({});

  console.log("item", employeeList, item);

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

  const addEmployee = useCallback(() => {
    setEmployeeList((employees) => [...employees, item]);
  }, [item, setEmployeeList]);

  return (
    <Paper sx={{ p: "30px" }}>
      <Box sx={{ width: "500px" }}>
        <TextField
          fullWidth
          {...addProps({ name: "dateHired", label: "Date Hired" })}
        />
      </Box>

      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "name", label: "Name" })}
          />
        </Box>

        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phone", label: "Phone", type: "number" })}
          />
        </Box>
      </Stack>

      <Stack sx={{ border: "1px solid black", p: 1 }}>
        <FormControl margin="dense">
          <FormLabel id="employeeType">Employment Type</FormLabel>
          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "employeeType", label: "employeeType" })}
          >
            <FormControlLabel
              value="maintenance"
              control={<Radio />}
              label="Maintenance"
            />
            <FormControlLabel
              value="siteManager"
              control={<Radio />}
              label="site manager"
            />
            <FormControlLabel
              value="maintenanceSupervisor"
              control={<Radio />}
              label="maintenance supervisor"
            />
            <FormControlLabel
              value="officeManager"
              control={<Radio />}
              label="office manager"
            />
            <FormControlLabel value="admin" control={<Radio />} label="admin" />
          </RadioGroup>
        </FormControl>
        <div>do permissions based on employment types</div>
        <div>
          when you choose employment types permissions box under with options
          for sites if needed
        </div>

        <div>Admin -all</div>
        <div>Maintenance - work orders edit view </div>
        <div>maintenance manager - bills all work orders stuff</div>
        <div>
          office manager - rent stuff bills stuff, applicant?, tenant move in
          stuff, maybe work order stuff
        </div>
        <div>
          site manager - rent stuff based on site choices, bills stuff?
          workorder stuff, applicants stuff and tenant stuff based on site
          choices
        </div>
        <div>checkboxes for sites managing</div>
        <div>maintenance supervisor - all work order stuff</div>
      </Stack>

      <button onClick={addEmployee}>Add</button>
    </Paper>
  );
}
