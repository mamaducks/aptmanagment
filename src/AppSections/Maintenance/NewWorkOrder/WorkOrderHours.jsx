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
import { getAllHours } from "../../../data/workOrderHoursAtoms";
import { useCallback, useState } from "react";

export function WorkOrderHours() {
  const [hoursTotal, setHoursTotal] = useRecoilState(getAllHours);
  //const index = applicantList.findIndex((listItem) => listItem === item);
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
    setHoursTotal((hours) => [...hours, hour]);
  }, [hour, setHoursTotal]);

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
