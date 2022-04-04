import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currencyFormatter, dateFormatter } from "../../formatters/cellFormatters";
import { SiteHeader } from "../../headers/SiteHeader";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";
import { useColumns } from "../../state/helpers/hooks";
import { getUnitRentTotals } from "../../state/rents";


export const columns = [
  {
    field: "type",
    headerName: "Type",
    width: 420,
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
    width: 420,
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

  console.log("ll", unitInfo, siteId, unitId);

  return (
    <div style={{ height: 900, width: "100%" }}>
      <Box gap={12}>
        <Button href="/" startIcon={<ArrowBackIosIcon />}>
          Back to Dashboard
        </Button>
        <Box ml={10}>
          <SiteHeader />
        </Box>
       
      </Box>
      <Typography textAlign="center" variant="h6">
        Unit Summary as of {getCurrentMonthYearLabel()}
      </Typography>

      <DataGrid
        getRowId={(item) =>
          `${item.siteId}-${item.unitId}-${item.timestamp}-${item.type}`
        }
        // rows={siteWithUnits.map((item) => ({ ...item, unitId }))}
        rows={unitInfo}
        columns={columnsToUse}
      />
    </div>
  );
}
