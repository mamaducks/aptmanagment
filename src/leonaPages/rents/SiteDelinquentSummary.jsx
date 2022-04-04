import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NumbersIcon from "@mui/icons-material/Numbers";
import {
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText, Popover, Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  currencyFormatter
} from "../../formatters/cellFormatters";
import {
  getCurrentMonthYear
} from "../../state/helpers/dataHelpers";
import {
  getSiteLedgerSummaryInfoMap, getSiteWithTenantsSummaryInfo
} from "../../state/sites";



export function SiteDelinquentSummary() {
  const { siteId } = useParams();
  //   const { units } = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  //   const tenant = units.find((item) => item.unitId === unitId);

  const { ledgerInfo } =
    useRecoilValue(getSiteLedgerSummaryInfoMap).get(siteId) || {};

  const [year, month] = getCurrentMonthYear();
  const summaryInfo = ledgerInfo?.[year]?.[month];

  const delinquencies = summaryInfo?.rentTotals?.delinquentTotal;

  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const unitsDelinquent = siteWithUnits.units.filter(
    (item) => item.totalSummary < 0
  );

  console.log("ss", delinquencies);
  //     "bb",
  //     depositSummary,
  //     "ff",
  //     pendingPayments
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        height: 250,
      }}
    >
      <CardContent>
        <List>
          <Typography variant="h6" lineHeight={2} sx={{ textIndent: 12 }}>
            Delinquencies
          </Typography>

          <Divider sx={{ mb: 1 }} />

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <NumbersIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ flex: "0 1 auto", pr: 2 }}
              primary={unitsDelinquent.length}
              primaryTypographyProps={{ fontSize: "large" }}
            />
            <ListItemText
              secondary="Units Delinquent"
              primaryTypographyProps={{ fontSize: "large" }}
            />
            <ListItemSecondaryAction sx={{ alignSelf: "flex-end" }}>
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                View
              </Button>
            </ListItemSecondaryAction>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box p={5}>
                {unitsDelinquent.map((item) => (
                  <Typography lineHeight={2}>Unit {item.unitId}</Typography>
                ))}
              </Box>
            </Popover>
          </ListItem>

          <ListItem my={3}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <AttachMoneyIcon />
            </ListItemIcon>

            <ListItemText
              primary={currencyFormatter({ value: delinquencies })}
              secondary="Amount"
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
