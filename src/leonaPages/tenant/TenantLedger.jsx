import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter,
  dateFormatter
} from "../../formatters/cellFormatters";
import { SiteHeader } from "../../headers/SiteHeader";
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

export function TenantLedger() {
  const { siteId, unitId, applicantId } = useParams();
  const columnsToUse = useColumns(columns);

  const tenantInfo = useRecoilValue(
    getUnitRentTotals([siteId, unitId, applicantId])
  );

  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  //  console.log("ll", tenantInfo, siteId, unitId, applicantId);

  return (
    <div style={{ height: 900, width: "100%" }}>
      <Box ml={3}>
        <Button href="/" startIcon={<ArrowBackIosIcon />}>
          Back to Dashboard
        </Button>

       
          <Box ml={8} mt={10}>
            <SiteHeader />
          </Box>

          
        
       
      </Box>
      <Stack>
      {/* <Button href="/sites/:siteId/rentroll" startIcon={<ArrowBackIosIcon />}>
          Back to Rents
        </Button> */}
        <Typography
          variant="h5"
          pt={5}
          pb={1}
          // sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
        >
          Tenant Ledger
        </Typography>
        <Typography variant="subtitle1" pr={7} >
          {/* {format(new Date(), 'MMMM', )}  */}
          {event.toLocaleDateString(undefined, options)}
        </Typography>
      </Stack>

      <DataGrid
        getRowId={(item) =>
          `${item.siteId}-${item.unitId}-${item.timestamp}-${item.type}`
        }
        // rows={siteWithUnits.map((item) => ({ ...item, unitId }))}
        rows={tenantInfo}
        columns={columnsToUse}
      />
    </div>
  );
}
