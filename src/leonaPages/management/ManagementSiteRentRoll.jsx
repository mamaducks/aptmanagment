import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMonth, getYear } from "date-fns";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currencyFormatter } from "../../formatters/cellFormatters";
import { paymentDialogInfo } from "../../state/dialogs";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";
import { useColumns } from "../../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";

export const columns = [
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
    headerName: "Payments",
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
          <Button href={`/management/rents/sites/${cellValues.row.siteId}/siteLedger/${cellValues.row.unitId}`}>
            Unit Ledger
          </Button>
          </Box>
        </Box>
      );
    },
  },
];

export function ManagementSiteRentRoll() {
  const { siteId } = useParams();
  const columnsToUse = useColumns(columns);

  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  console.log("nnn", siteWithUnits)

  return (
    <div style={{ height: 900, width: "100%" }}>

      <Typography textAlign="center" variant="h5" lineHeight={2}>
        Rents
      </Typography>

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={siteWithUnits.units.map((item) => ({ ...item, siteId }))}
        columns={columnsToUse}
      />
    </div>
  );
}
