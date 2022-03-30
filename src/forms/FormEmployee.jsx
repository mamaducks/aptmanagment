import DatePicker from "@mui/lab/DatePicker";
import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { employeeRoleData } from "../state/data/employees";
import { getEmployeeFormData } from "../state/employees";

export function FormEmployee() {
  const { employeeId } = useParams();
  const isNew = !employeeId;
  const navigate = useNavigate();

  const [employeeInfo, setEmployeeInfo] = useRecoilState(
    getEmployeeFormData(employeeId)
  );

  const [item, setItem] = useState(employeeInfo);

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null &&
        setItem((currentItem) => ({ ...currentItem, [name]: value }));
    },
    [setItem]
  );

  const addProps = useCallback(
    ({ name, label, type = "text" }) => {
      return {
        label,
        name,
        type,
        onChange: ({ target: { checked, name, value } }) =>
          setFieldValue(name, type === "text" ? value : Boolean(checked)),
        value: item[name],
      };
    },
    [item, setFieldValue]
  );

  const canSumbit = true;

  const handleSubmit = useCallback(() => {
    setEmployeeInfo(item);

    navigate(-1);
  }, [item, navigate, setEmployeeInfo]);

  return (
    <Stack direction="column" m={10}>
      <Stack>
        <FormControl>
          <FormLabel>Hire Date </FormLabel>

          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            value={item.hireDate}
            onChange={(newValue) => {
              setFieldValue("hireDate", newValue?.getTime());
            }}
          />
        </FormControl>

        <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>First Name</FormLabel>

          <TextField autoFocus {...addProps({ name: "firstName" })} />
        </FormControl>

        <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>Last Name</FormLabel>

          <TextField {...addProps({ name: "lastName" })} />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>

          <TextField {...addProps({ name: "phoneNumber" })} />
        </FormControl>
      </Stack>

      <Stack justifyContent="center">
        <FormControl sx={{ alignSelf: "center", mr: 3 }}>
          <FormLabel>Employment Type</FormLabel>

          <ToggleButtonGroup
            value={item.roles}
            onChange={(_, newValue) => {
              setFieldValue("roles", newValue);
            }}
          >
            {employeeRoleData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack justifyContent="center">
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!canSumbit}
        >
          {isNew ? "Add" : "Update"}
        </Button>

        <Button href="/employees">Cancel</Button>
      </Stack>
    </Stack>
  );
}
