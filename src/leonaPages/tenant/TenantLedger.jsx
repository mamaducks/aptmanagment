import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter,
  dateFormatter,
  phoneFormatter,
} from "../../formatters/cellFormatters";
import { SiteHeader } from "../../headers/SiteHeader";
import { useColumns } from "../../state/helpers/hooks";
import { getUnitRentTotals } from "../../state/rents";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";
import { TenantCurrentPayment } from "./TenantPaymentCard";

export const columns = [
  {
    field: "type",
    headerName: "Type",
    width: 120,
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
  const { units } = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  const tenant = units.find((item) => item.unitId === unitId);

  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div style={{ height: 900, width: "100%" }}>
      <Grid container >
        <Grid
          item
          sm={8}
          sx={{
            pr: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box pl={3} alignSelf="flex-start">
             <Button href="/" startIcon={<ArrowBackIosIcon />}>
            Back to Dashboard
          </Button>
          </Box>
         

          <Box alignSelf="flex-end">
            <Typography
              variant="h5"
              pr={7}
              pt={7}
              pb={5}
              alignSelf="center"
              fontSize="larger"
            >
              {new Date().toLocaleDateString(undefined, options)}
            </Typography>

            <TenantCurrentPayment />
          </Box>
        </Grid>
        <Grid item sm={4} sx={{ display: "flex", justifyContent: "flex-end",  }}>
          <Card
            variant="outlined"
            sx={{
              maxHeight: "fit-content",
              width: 600,
              mr: 8,
            }}
          >
            <CardHeader
              title={<SiteHeader />}
              subheader={`Unit #  ${unitId}`}
              subheaderTypographyProps={{ fontSize: "larger" }}
            />
            <Divider sx={{ mb: 1 }} />
            <CardContent>
              <List>
                <ListItem my={3}>
                  <ListItemText
                    primary={tenant.applicantsName}
                    secondary="Tenant"
                    primaryTypographyProps={{ fontSize: "large" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={phoneFormatter({ value: tenant.applicantsPhone })}
                    secondary="Phone Number"
                    primaryTypographyProps={{ fontSize: "large" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={dateFormatter({ value: tenant.dateMoveIn })}
                    secondary="Move-In Date"
                    primaryTypographyProps={{ fontSize: "large" }}
                  />

                  <ListItemText
                    primary={dateFormatter({ value: tenant.dateLease })}
                    secondary="Lease Date"
                    primaryTypographyProps={{ fontSize: "large" }}
                    sx={{ textAlign: "center" }}
                  />

                  <ListItemText
                    primary={dateFormatter({ value: tenant.dateRenewal })}
                    secondary="Recertify Date"
                    primaryTypographyProps={{ fontSize: "large" }}
                    sx={{ textAlign: "end" }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" pt={3} textAlign="center" lineHeight={2}>
        Tenant Ledger
      </Typography>

      <DataGrid
        getRowId={(item) =>
          `${item.siteId}-${item.unitId}-${item.timestamp}-${item.type}`
        }
        rows={tenantInfo}
        columns={columnsToUse}
      />
    </div>
  );
}
