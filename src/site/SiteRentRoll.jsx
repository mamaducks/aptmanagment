import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useColumns } from "../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { SiteHeader } from "./SiteHeader";
import { currencyFormatter } from "../formatters/cellFormatters";
import { Box, Button } from "@mui/material";
import { useMemo } from "react";
import { paymentDialogInfo } from "../state/dialogs";

export const getColumns = ({ setPaymentDialogInfo }) => [
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
    headerName: "Rent Paid",
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
    renderCell: ({ row }) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Button
              onClick={() => setPaymentDialogInfo(row)}
              disabled={!row.tenant}
            >
              Enter Rent Payment
            </Button>
          </Box>
        </Box>
      );
    },
  },
];

export function SiteRentRoll() {
  const { siteId } = useParams();
  const setPaymentDialogInfo = useSetRecoilState(paymentDialogInfo);

  const columnsToUse = useColumns(
    useMemo(() => getColumns({ setPaymentDialogInfo }), [setPaymentDialogInfo])
  );

  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={siteWithUnits.units.map((item) => ({ ...item, siteId }))}
        columns={columnsToUse}
      />
    </div>
  );
}
