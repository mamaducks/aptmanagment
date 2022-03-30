import DatePicker from "@mui/lab/DatePicker";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getApplicantFormData } from "../state/applicants";
import {
  applicantAccomodationsData,
  applicantEthnicityData,
  applicantGendersData,
  applicantIncomeLevelData,
  applicantRaceData,
  applicantStatusData,
} from "../state/data/applicants";
import { employeeRoleData, EMPTY_EMPLOYEE } from "../state/data/employees";
import { getEmployeeFormData, employeeRoleDataMap } from "../state/employees";
import { Reference } from "../state/data/reference";
import {
  removeItemAtIndex,
  replaceItemAtIndex,
} from "../state/helpers/dataHelpers";
import { sites } from "../state/sites";
import { Delete, Check } from "@mui/icons-material";
import { EMPTY_APPLICANT } from "../state/applicants";

export function FormEmployee() {
  const { employeeId } = useParams();
  const isNew = !employeeId;
  const navigate = useNavigate();
  //   const allRoles = useRecoilValue(sites);

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
  const rolesMap = useRecoilValue(employeeRoleDataMap);

  const handleSubmit = useCallback(() => {
    setEmployeeInfo(item);
  }, [item, setEmployeeInfo]);

  return (
    <Stack direction="column" m={10}>
      <Stack>
        <FormControl>
          <FormLabel>Hire Date </FormLabel>

          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            value={item.hireDate}
            onChange={(newValue) => {
              setFieldValue("hireDate", newValue.getTime());
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
            exclusive
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
