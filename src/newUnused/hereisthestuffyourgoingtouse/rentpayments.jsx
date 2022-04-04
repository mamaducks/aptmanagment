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
import { getPaymentsMap, getPaymentFormData } from "../state/payments";
import { Box } from "@mui/system";

export function FormRent({ applicantId, siteId, unitId, onClose }) {
  // const { siteId } = useParams();
  // const navigate = useNavigate();
  //   const allRoles = useRecoilValue(sites);
  const unitRent = useRecoilValue(getTenantRentsMap).get(applicantId);

  const [paymentInfo, setPaymentInfo] = useRecoilState(
    getPaymentFormData({ siteId, unitId, applicantId })
  );

  const [rentInfo, setRentInfo] = useRecoilState(
    getRentFormData({ siteId, unitId, applicantId })
  );

  const [rent, setRent] = useState(rentInfo);
  const [payment, setPayment] = useState(paymentInfo);

  const siteRents = useRecoilValue(getRentsMap);

  const sitePayments = useRecoilValue(getPaymentsMap);

  const allRents = siteRents
    .get(rent.siteId)
    .units.filter((item) => (unitId ? true : !item.tenant));

  const allPayments = sitePayments
    .get(rent.siteId)
    .units.filter((item) => (unitId ? true : !item.tenant));

  const setRentFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && setRent((item) => ({ ...item, [name]: value }));
    },
    [setRent]
  );

  const setPaymentFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && setPayment((item) => ({ ...item, [name]: value }));
    },
    [setPayment]
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
    setRentInfo(rent);
    setPaymentInfo(payment);
  }, [rent, setRentInfo, payment, setPaymentInfo]);

  return (
    <Box display="flex" justifyContent="center">
      <Stack direction="column" m={10}>
        {/* <SiteHeader /> */}
        <div>sitename</div>

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
                label={siteRents.unitId}
                defaultValue="unitId"
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
                label={siteRents.applicantId}
                defaultValue="tenant name"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FormControl>

            {/* <Typography sx={{ alignSelf: "center" }}>
            {siteRents?.applicantId}
            tenant last name or name
          </Typography> */}
            <FormControl>
              <TextField
                onChange={({ target: { value } }) =>
                  setRentFieldValue("amount", value)
                }
                label="Rent Due"
                value={currencyFormatter(rent.amount)}
              >
                rent due
              </TextField>
            </FormControl>
            <FormControl>
              <TextField
                onChange={({ target: { value } }) =>
                  setPaymentFieldValue("amount", value)
                }
                label="Rent Paid"
                value={currencyFormatter(payment.amount)}
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