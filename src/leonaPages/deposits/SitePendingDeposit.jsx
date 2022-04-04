import { DatePicker } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { sumBy } from "lodash";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  currencyFormatter,
  dateTimeFormatter,
} from "../../formatters/cellFormatters";
import { getDepositFormData } from "../../state/deposits";
import { useColumns } from "../../state/helpers/hooks";

export const columns = [
  {
    field: "timestamp",
    headerName: "Payment Date",
    valueFormatter: dateTimeFormatter,
    width: 240,
  },
  {
    field: "unitId",
    headerName: "Unit Posted To",
    width: 200,
  },

  {
    field: "amount",
    headerName: "Payment Amount",
    valueFormatter: currencyFormatter,
    width: 200,
  },
];

export function SitePendingDeposit() {
  const { siteId } = useParams();
  const columnsToUse = useColumns(columns);
  const [pendingPayments, addDeposit] = useRecoilState(
    getDepositFormData(siteId)
  );

  const [depositDate, setDepositDate] = useState(new Date());
  const [selectedPayments, setSelectedPayments] = useState([]);

  const pendingTotal = sumBy(selectedPayments, "amount");

  const handleSubmitDeposit = useCallback(() => {
    addDeposit({ depositDate, pendingTotal, selectedPayments });

    setDepositDate(undefined);
  }, [addDeposit, depositDate, pendingTotal, selectedPayments]);

  return (
    <div>
      <Stack>
        <FormControl>
          <FormLabel>Date of Deposit</FormLabel>

          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            value={depositDate}
            onChange={(newValue) => {
              setDepositDate(newValue);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Payments to Deposit</FormLabel>

          <TextField value={pendingTotal} />
          <FormHelperText>Check boxes from table for total</FormHelperText>
        </FormControl>

        <Box alignSelf="center">
          <Button
            disabled={!selectedPayments.length}
            onClick={handleSubmitDeposit}
          >
            Submit Deposit
          </Button>
        </Box>
      </Stack>

      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          getRowId={(item) => item.id}
          rows={pendingPayments}
          columns={columnsToUse}
          onSelectionModelChange={(selectedIds) => {
            const selectedPayments = selectedIds.map((id) =>
              pendingPayments.find((payment) => payment.id === id)
            );

            setSelectedPayments(selectedPayments);
          }}
          checkboxSelection
        />
      </div>
    </div>
  );
}
