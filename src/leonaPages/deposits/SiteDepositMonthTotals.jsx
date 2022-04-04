import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NumbersIcon from "@mui/icons-material/Numbers";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currencyFormatter } from "../../formatters/cellFormatters";
import { getCurrentMonthYear } from "../../state/helpers/dataHelpers";
import { getSiteLedgerSummaryInfoMap } from "../../state/sites";

export function SiteDepositSummary() {
  const { siteId } = useParams();
  //   const { units } = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  //   const tenant = units.find((item) => item.unitId === unitId);

  const { ledgerInfo } =
    useRecoilValue(getSiteLedgerSummaryInfoMap).get(siteId) || {};

  const [year, month] = getCurrentMonthYear();
  const summaryInfo = ledgerInfo?.[year]?.[month];

  const depositSummary = summaryInfo?.rentTotals?.depositsTotal;
  const paymentSummary = summaryInfo?.rentTotals?.paymentsTotal;
  const pendingPayments = summaryInfo?.rentTotals?.pendingPaymentsAmount;
  const pendingSummary = summaryInfo?.rentTotals?.pendingDepositsTotal;

  console.log(
    "ss",
    summaryInfo?.rentTotals,
    "bb",
    depositSummary,
    "ff",
    pendingPayments
  );

  return (
    <Card
      variant="outlined"
      sx={{
        width: 600,
      }}
    >
      <CardContent>
        <Typography variant="h6" lineHeight={2} sx={{ textIndent: 12 }}>
          Totals Summary
        </Typography>

        <Divider sx={{ mb: 1 }} />
        <Stack>
          <List>
            <ListSubheader>Payments</ListSubheader>
            <Divider sx={{ mb: 1 }} />
            <ListItem my={3}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <AttachMoneyIcon />
              </ListItemIcon>

              <ListItemText
                primary={currencyFormatter({ value: paymentSummary })}
                secondary="Payments this month"
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <NumbersIcon />
              </ListItemIcon>
              <Tooltip title="Total payments awaiting deposit">
                <ListItemText
                  // sx={{ flex: "0 1 auto", pr: 2 }}
                  primary={pendingPayments}
                  secondary="Pending Deposit"
                  primaryTypographyProps={{
                    fontSize: "large",
                    textAlign: "start",
                  }}
                />
              </Tooltip>
              {/* <ListItemText
              secondary="Payments Pending Deposit"
              primaryTypographyProps={{ fontSize: "large", 
            }}
            /> */}
            </ListItem>
          </List>

          <List>
            <ListSubheader>Deposits</ListSubheader>
            <Divider sx={{ mb: 1 }} />
            <ListItem my={3}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <AttachMoneyIcon />
              </ListItemIcon>

              <ListItemText
                primary={currencyFormatter({ value: depositSummary })}
                secondary="Deposits this month"
                primaryTypographyProps={{ fontSize: "large" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <AttachMoneyIcon />
              </ListItemIcon>

              <ListItemText
                primary={currencyFormatter({ value: pendingSummary })}
                secondary="Pending Deposits"
              />
            </ListItem>
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
}
