import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter, dateFormatter
} from "../../formatters/cellFormatters";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";



export function TenantCurrentPayment() {
  const { siteId, unitId, applicantId } = useParams();
  const { units } = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  const tenant = units.find((item) => item.unitId === unitId);

  const { payments = [], rents = [] } = tenant;
  const [payment] = payments;
  const [rent] = rents;

  console.log(tenant, payment, rent);
  return (
    // <Box display="flex" flexDirection="column" p={2}>
    <Card
      variant="outlined"
      sx={{
        maxHeight: "fit-content",
        flexGrow: 1,
        maxWidth: 600

      }}
    >
      <CardContent>
        <List>
          <ListSubheader>{getCurrentMonthYearLabel()}</ListSubheader>

          <Divider sx={{ mb: 1 }} />

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>

            <ListItemText
              primary="Rent Due"
              primaryTypographyProps={{ fontSize: "large" }}
            />

            <ListItemText
              primary={currencyFormatter({ value: rent.amount })}
              // secondary= {"As of" + " " + dateFormatter({ value: rent.timestamp })}
              secondary={`As of ${dateFormatter({ value: rent.timestamp })}`}
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText
              primary="Payment Amount"
              primaryTypographyProps={{ fontSize: "large" }}
            />

            <ListItemText
              primary={currencyFormatter({ value: payment.amount })}
              secondary={`Recieved on ${dateFormatter({
                value: payment.timestamp,
              })}`}
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>

            <ListItemText
              primary="Tenant Balance"
              primaryTypographyProps={{ fontSize: "large" }}
            />

            <ListItemText
              primary={currencyFormatter({ value: tenant.totalSummary })}
              secondary="Current Balance"
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
    // </Box>
  );
}
