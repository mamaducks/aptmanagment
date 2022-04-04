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
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  getSiteWithDepositSummaryInfo,
  getSiteWithTenantsSummaryInfo,
  getSiteLedgerSummaryInfoMap,
} from "../../state/sites";
import { getApplicantsWithNameMap } from "../../state/applicants";

import { getTenantFormData } from "../../state/tenants";
import {
  getCurrentMonthYear,
  getCurrentMonthYearLabel,
  getYearMonthDateMap,
} from "../../state/helpers/dataHelpers";
import { getTenantRentsMap, getUnitRentTotals } from "../../state/rents";
import { textAlign } from "@mui/system";
import {
  dateFormatter,
  currencyFormatter,
} from "../../formatters/cellFormatters";
import { MonthPicker } from "@mui/lab";
import { getRentPaymentTotals } from "../../state/helpers/rentsHelpers";
import { getMonth, getYear } from "date-fns";

export function SiteRentPaymentSummary() {
  const { siteId } = useParams();
  //   const { units } = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  //   const tenant = units.find((item) => item.unitId === unitId);
  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const { ledgerInfo } =
    useRecoilValue(getSiteLedgerSummaryInfoMap).get(siteId) || {};

  const [year, month] = getCurrentMonthYear();
  const summaryInfo = ledgerInfo?.[year]?.[month];

  const rentsDue = summaryInfo?.rentTotals?.rentsTotal;
  const PaymentssMade = summaryInfo?.rentTotals?.paymentsTotal;

  const depositSummary = summaryInfo?.rentTotals?.depositsTotal;
  //   const paymentSummary = summaryInfo?.rentTotals?.paymentsTotal;
  //   const pendingPayments = summaryInfo?.rentTotals?.pendingPaymentsAmount;
  //   const pendingSummary = summaryInfo?.rentTotals?.pendingDepositsTotal;

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: "fit-content",
        width: 400,
      }}
    >
      <CardContent>
        <List>
          <Typography variant="h6"  lineHeight={2} sx={{textIndent: 12}}>Totals Summary</Typography>

          <Divider sx={{ mb: 1 }} />

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>

            <ListItemText
              primary={currencyFormatter({ value: rentsDue })}
              secondary="Rents Due this month"
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>

            <ListItemText
              primary={currencyFormatter({ value: PaymentssMade })}
              secondary="Payments made this month"
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>

            <ListItemText
              primary={currencyFormatter({ value: depositSummary })}
              secondary="Deposits made"
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
