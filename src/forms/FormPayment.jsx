import DateTimePicker from "@mui/lab/DatePicker";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { SiteHeader } from "../site/SiteHeader";
import { employeeRoleData } from "../state/data/employees";
import { employeeRoleDataMap, getEmployeeFormData } from "../state/employees";
import {
  getRentFormData,
  getRentsMap,
  getTenantRentsMap,
} from "../state/rents";
import { currencyFormatter } from "../formatters/cellFormatters";
import {
  getPaymentsMap,
  getPaymentFormData,
  payments,
} from "../state/payments";
import { Box } from "@mui/system";

export function FormPayment() {
  const { siteId } = useParams();
  // const navigate = useNavigate();
  //   const allRoles = useRecoilValue(sites);
  // const unitPayment = useRecoilValue(getTenantRentsMap).get(applicantId);
  const unitPayment = useRecoilValue(payments);

  const [paymentInfo, setPaymentInfo] = useRecoilState(
    getPaymentFormData(siteId)
  );

  const [item, setItem] = useState(paymentInfo);

  // const allPayments = sitePayments
  //   .get(rent.siteId)
  //   .units.filter((item) => (unitId ? true : !item.tenant));

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && setItem((item) => ({ ...item, [name]: value }));
    },
    [setItem]
  );

  // const addProps = useCallback(
  //   ({ name, label, type = "text" }) => {
  //     return {
  //       label,
  //       name,
  //       type,
  //       onChange: ({ target: { checked, name, value } }) =>
  //         setFieldValue(name, type === "text" ? value : Boolean(checked)),
  //       value: item[name],
  //     };
  //   },
  //   [item, setFieldValue]
  // );

  const canSumbit = true;
  //   const rolesMap = useRecoilValue(employeeRoleDataMap);

  const handleSubmit = useCallback(() => {
    setPaymentInfo(item);
  }, [item, setPaymentInfo]);

  return (
    <Box display="flex" justifyContent="center">
      <Stack direction="column" m={10}>
        <Stack>
          {/* <SiteHeader /> */}
          <div>sitename</div>
          <div>{item.timestamp}</div>
        </Stack>

        <Stack>
          {/* <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>Site</FormLabel>

          <TextField autoFocus {...addProps({ name: "siteName" })} />
        </FormControl>

        <FormControl>
          <FormLabel>Today's Date </FormLabel>

          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            value={item.timestamp}
            onChange={(newValue) => {
              setFieldValue("timestamp", newValue?.getTime());
            }}
          />
        </FormControl> */}

          <Stack>
            {/* <Typography textAlign="center" sx={{ alignSelf: "center" }}>
            {siteRents.unitId}
            unit
          </Typography> */}
            <FormControl>
              <FormLabel>Unit</FormLabel>
              <TextField
                margin="normal"
                // label={siteRents.unitId}
                value={item.unitId}
                // defaultValue="unitId"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tenant</FormLabel>
              <TextField
                margin="normal"
                // label={siteRents.applicantId}
                value={item.lastName}
                // defaultValue="tenant name"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Rent Paid</FormLabel>

              <TextField
                onChange={({ target: { value } }) =>
                  setFieldValue("amount", value)
                }
                label="Rent Paid"
                value={currencyFormatter(item.amount)}
              >
                rent paid
              </TextField>
            </FormControl>
          </Stack>
        </Stack>

        <Stack justifyContent="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
            //   disabled={!canSumbit}
          >
            Submit Payments
            {/* {isNew ? "Add" : "Update"} */}
          </Button>

          <Button href="/deposits">Cancel</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
