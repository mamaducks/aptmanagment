import DateTimePicker from "@mui/lab/DatePicker";
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
import { useRecoilState, useRecoilValue } from "recoil";
import { employeeRoleData } from "../state/data/employees";
import { employeeRoleDataMap, getEmployeeFormData } from "../state/employees";

export function FormDeposit() {
  const { siteId } = useParams();
  const navigate = useNavigate();
  //   const allRoles = useRecoilValue(sites);

  const [depositInfo, setDepositInfo] = useRecoilState(
    getEmployeeFormData(siteId)
  );

  const [item, setItem] = useState(depositInfo);

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
  //   const rolesMap = useRecoilValue(employeeRoleDataMap);

  const handleSubmit = useCallback(() => {
    setDepositInfo(item);
  }, [item, setDepositInfo]);

  return (
    <Stack direction="column" m={10}>
      <Stack>
        <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>Site</FormLabel>

          <TextField autoFocus {...addProps({ name: "siteName" })} />
        </FormControl>

        <FormControl>
          <FormLabel>Date Deposit </FormLabel>

          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            value={item.timestamp}
            onChange={(newValue) => {
              setFieldValue("timestamp", newValue?.getTime());
            }}
          />
        </FormControl>

        <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>Deposit Amount</FormLabel>

          <TextField autoFocus {...addProps({ name: "amount" })} />
        </FormControl>
      </Stack>

      <Stack justifyContent="center">
        <Button
          variant="contained"
          onClick={handleSubmit}
          //   disabled={!canSumbit}
        >
          {/* {isNew ? "Add" : "Update"} */}
        </Button>

        <Button href="/deposits">Cancel</Button>
      </Stack>
    </Stack>
  );
}
