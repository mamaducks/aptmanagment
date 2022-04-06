import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currencyFormatter } from "../../formatters/cellFormatters";
import { getCurrentMonthYear } from "../../state/helpers/dataHelpers";
import { getSiteLedgerSummaryInfoMap } from "../../state/sites";

export function SiteRentPaymentSummary() {
  const { siteId } = useParams();

  const { ledgerInfo } =
    useRecoilValue(getSiteLedgerSummaryInfoMap).get(siteId) || {};

  const [year, month] = getCurrentMonthYear();
  const summaryInfo = ledgerInfo?.[year]?.[month];

  const rentsDue = summaryInfo?.rentTotals?.rentsTotal;
  const PaymentssMade = summaryInfo?.rentTotals?.paymentsTotal;

  const depositSummary = summaryInfo?.rentTotals?.depositsTotal;

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
          <Typography variant="h6" lineHeight={2} sx={{ textIndent: 12 }}>
            Totals Summary
          </Typography>

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
