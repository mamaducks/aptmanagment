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
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyFormatter } from "../formatters/cellFormatters";
import { getRentFormData, rents } from "../state/rents";

export function FormRent() {
  const { siteId } = useParams();

  const unitRent = useRecoilValue(rents);

  const [rentInfo, setRentInfo] = useRecoilState(getRentFormData(siteId));

  const [item, setitem] = useState(rentInfo);

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && setitem((item) => ({ ...item, [name]: value }));
    },
    [setitem]
  );

  const handleSubmit = useCallback(() => {
    setRentInfo(item);
  }, [item, setRentInfo]);

  return (
    <Box display="flex" justifyContent="center">
      <Stack direction="column" m={10}>
        <Stack>
          <div>sitename</div>
          <div>Month</div>
        </Stack>

        <Stack>
          {unitRent.map((item) => (
            <Stack>
              <FormControl>
                <FormLabel>Unit</FormLabel>
                <TextField
                  margin="normal"
                  value={item.unitId}
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
                  value={item.lastName}
                  defaultValue="tenant name"
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Rent Due</FormLabel>

                <TextField
                  onChange={({ target: { value } }) =>
                    setFieldValue("amount", value)
                  }
                  value={currencyFormatter(item.amount)}
                >
                  rent due
                </TextField>
              </FormControl>
            </Stack>
          ))}
        </Stack>

        <Stack justifyContent="center">
          <Button variant="contained" onClick={handleSubmit}>
            Update Rents
          </Button>

          <Button href="/deposits">Cancel</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
