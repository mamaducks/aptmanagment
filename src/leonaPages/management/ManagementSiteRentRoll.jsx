import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currencyFormatter } from "../../formatters/cellFormatters";
import { useColumns } from "../../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";
import { SiteHeader } from "../../headers/SiteHeader";
import { RowHeader } from "../../headers/RowHeader";

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
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Button
              href={`/management/rents/sites/${cellValues.row.siteId}/siteLedger/${cellValues.row.unitId}`}
            >
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

  console.log("nnn", siteWithUnits);

  return (
    <div style={{ height: 900, width: "100%" }}>
      <RowHeader label={`${siteWithUnits.siteName} Rents`} />
      <DataGrid
        getRowId={(item) => item.unitId}
        rows={siteWithUnits.units.map((item) => ({ ...item, siteId }))}
        columns={columnsToUse}
      />
    </div>
  );
}
