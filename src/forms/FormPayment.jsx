import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currencyFormatter } from "../formatters/cellFormatters";
import { getPaymentFormData } from "../state/payments";

export function FormPayment() {
  const { siteId } = useParams();

  const [paymentInfo, setPaymentInfo] = useRecoilState(
    getPaymentFormData(siteId)
  );

  const [item, setItem] = useState(paymentInfo);

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && setItem((item) => ({ ...item, [name]: value }));
    },
    [setItem]
  );

  const handleSubmit = useCallback(() => {
    setPaymentInfo(item);
  }, [item, setPaymentInfo]);

  return (
    <Box display="flex" justifyContent="center">
      <Stack direction="column" m={10}>
        <Stack>
          <div>sitename</div>
          <div>{item.timestamp}</div>
        </Stack>

        <Stack>
          <Stack>
            <FormControl>
              <FormLabel>Unit</FormLabel>
              <TextField
                margin="normal"
                value={item.unitId}
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
                value={item.lastName}
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
                label="amount recieved"
                value={currencyFormatter(item.amount)}
              >
                amount recieved
              </TextField>
            </FormControl>
          </Stack>
        </Stack>

        <Stack justifyContent="center">
          <Button variant="contained" onClick={handleSubmit}>
            Submit Payments
          </Button>

          <Button href="/deposits">Cancel</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
