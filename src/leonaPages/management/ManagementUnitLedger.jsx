import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter,
  dateFormatter,
} from "../../formatters/cellFormatters";
import { SiteHeader } from "../../headers/SiteHeader";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";
import { useColumns } from "../../state/helpers/hooks";
import { getUnitRentTotals } from "../../state/rents";

export const columns = [
  {
    field: "type",
    headerName: "Type",
    width: 220,
  },
  {
    field: "timestamp",
    headerName: "Payment Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 440,
  },
  {
    field: "amount",
    headerName: "Amount",
    valueFormatter: currencyFormatter,
    width: 200,
    type: "rent",
  },
];

export function UnitLedger() {
  const { siteId, unitId } = useParams();
  const columnsToUse = useColumns(columns);

  const unitInfo = useRecoilValue(getUnitRentTotals([siteId, unitId]));

  console.log("ll", siteId, unitId);

  return (
    <div style={{ height: 900, width: "100%" }}>
      <Box ml={3}>
        <Button href="/" startIcon={<ArrowBackIosIcon />}>
          Back to Dashboard
        </Button>
        <Box ml={10} pt={3}>
          <SiteHeader />
        </Box>
      </Box>

      <Typography textAlign="center" variant="h5" lineHeight={2}>
        {unitId} Unit Summary as of {getCurrentMonthYearLabel()}
      </Typography>

      <DataGrid
        getRowId={(item) =>
          `${item.siteId}-${item.unitId}-${item.timestamp}-${item.type}`
        }
        rows={unitInfo}
        columns={columnsToUse}
      />
    </div>
  );
}
