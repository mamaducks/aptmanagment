import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useColumns } from "../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { SiteHeader } from "./SiteHeader";
import { currencyFormatter } from "../formatters/cellFormatters";
import { Box, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import { paymentDialogInfo } from "../state/dialogs";
import { month, year } from "../state/data/reference";

export const columns =  [
  { field: "unitId", headerName: "Unit", width: 140 },

  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 420,
  },
  {
    field: "rentsTotal",
    headerName: "Rent Due",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "paymentsTotal",
    headerName: "Payment Amount",
    valueFormatter: currencyFormatter,
    width: 200,
  },

  {
    field: "totalSummary",
    headerName: "Total Summary",
    description: "Carry Over Balance",
    valueFormatter: currencyFormatter,
    highlightPositiveNegative: true,
    width: 200,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 450,
    renderCell: (cellValues ) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/sites/${cellValues.row.siteId}/addpayments`}>
            Enter Payments
          </Button>
          </Box>
        </Box>
      );
    },
  },
];

export function SiteRentRoll() {
  const { siteId } = useParams();
  // const setPaymentDialogInfo = useSetRecoilState(paymentDialogInfo);

  // const columnsToUse = useColumns(
  //   useMemo(() => getColumns({ setPaymentDialogInfo }), [setPaymentDialogInfo])
  // );

  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />
      <Typography textAlign="center">
         Rent info for {month} {year}
      </Typography>
      <DataGrid
        getRowId={(item) => item.unitId}
        rows={siteWithUnits.units.map((item) => ({ ...item, siteId }))}
        columns={columns}
      />
    </div>
  );
}
