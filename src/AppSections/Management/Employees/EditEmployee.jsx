import {
  Box,
  Button,
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
  Typography,
} from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { allEmployees } from "../../../data/employeesAtoms";
import { useCallback, useState } from "react";
import { getEmployeeInfo } from "../../../data/employeesAtoms";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function EditEmployee({ employeeId }) {
  const [employees, setEmployees] = useRecoilState(allEmployees);

  const oldEmployee = useRecoilValue(getEmployeeInfo(employeeId));
  const index = employees.findIndex(
    (listItem) => listItem.employeeId === employeeId
  );
  const [item, setItem] = useState(oldEmployee || {});

  console.log("item", employees, item);
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

  const updateEmployee = useCallback(() => {
    setEmployees((current) => replaceItemAtIndex(current, index, item));
  }, [item, index, setEmployees]);

  return (
    // <Paper sx={{ p: "30px" }}>
    <Box sx={{ px: "30px", py: "5px" }}>
      <Typography variant="h5" textAlign="center">
        Edit Current Employee
      </Typography>
      <Box sx={{ width: "500px" }}>
        <TextField
          margin="dense"
          fullWidth
          {...addProps({ name: "dateHired", label: "Date Hired" })}
        />
      </Box>

      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "firstName", label: "First Name" })}
          />
        </Box>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "lastName", label: "Last Name" })}
          />
        </Box>

        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phone", label: "Phone" })}
          />
        </Box>
      </Stack>
      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "rate", label: "Rate" })}
          />
        </Box>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "endDate", label: "End Date" })}
          />
        </Box>
      </Stack>

      <Stack sx={{ border: "1px solid black", mt: 2 }}>
        <FormControl margin="dense">
          <Typography variant="h6" textAlign="center">
            Employment Type
          </Typography>
          <FormGroup
            sx={{ justifyContent: "center" }}
            row
            defaultValue=""
            {...addProps({ name: "employeeType", label: "employeeType" })}
          >
            <FormControlLabel
              value="maintenance"
              control={<Checkbox />}
              label="Maintenance"
            />
            <FormControlLabel
              value="siteManager"
              control={<Checkbox />}
              label="site manager"
            />
            <FormControlLabel
              value="maintenanceSupervisor"
              control={<Checkbox />}
              label="maintenance supervisor"
            />
            <FormControlLabel
              value="officeManager"
              control={<Checkbox />}
              label="office manager"
            />
            <FormControlLabel
              value="admin"
              control={<Checkbox />}
              label="admin"
            />
          </FormGroup>
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
          stuff, add work order stuff
        </div>
        <div>
          site manager - rent stuff based on site choices, bills stuff?
          workorder stuff, applicants stuff and tenant stuff based on site
          choices
        </div>
        <div>checkboxes for sites managing</div>
        <div>maintenance supervisor - all work order stuff</div>
      </Stack>
      <Box display="flex" justifyContent="center" pt={1}>
        <Button size="large" variant="contained" onClick={updateEmployee}>
          Update Employee
        </Button>
      </Box>
    </Box>
  );
}
