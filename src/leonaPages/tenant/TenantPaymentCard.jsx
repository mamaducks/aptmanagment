import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter,
  dateFormatter,
} from "../../formatters/cellFormatters";
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
    <>
      <Stack>
        <Card sx={{ width: 280 }} variant="outlined">
          <List>
            <ListItem my={3}>
              <ListItemText
                primary="Rent Due"
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon sx={{ minWidth: 20 }}>
                <AttachMoneyIcon />
              </ListItemIcon>

              <ListItemText
                primary={currencyFormatter({ value: rent.amount })}
                secondary={`As of ${dateFormatter({ value: rent.timestamp })}`}
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
          </List>
        </Card>

        <Card variant="outlined" sx={{ width: 280 }}>
          <List>
            <ListItem my={3}>
              <ListItemText
                primary="Tenant Payment"
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <AttachMoneyIcon />
              </ListItemIcon>

              <ListItemText
                primary={currencyFormatter({ value: payment.amount })}
                secondary={`Recieved on ${dateFormatter({
                  value: payment.timestamp,
                })}`}
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
          </List>
        </Card>

        <Card sx={{ width: 280 }} variant="outlined">
          <List>
            <ListItem my={3}>
              <ListItemText
                primary="Tenant Balance"
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <AttachMoneyIcon />
              </ListItemIcon>

              <ListItemText
                primary={currencyFormatter({ value: tenant.totalSummary })}
                secondary="Current Balance"
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
          </List>
        </Card>
      </Stack>
    </>
  );
}
