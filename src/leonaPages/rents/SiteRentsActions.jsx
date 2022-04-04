import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Divider, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { SiteAddPaymentsMade } from "./AddPaymentsMade";
import { SiteAddRentsDue } from "./AddRentsDue";
import { SiteDeposits } from "../deposits/SiteDeposits";
import { SiteHeader } from "../../headers/SiteHeader";
import { SitePendingDeposit } from "../deposits/SitePendingDeposit";
import { SiteRentRoll } from "../sites/SiteRentRoll";
import { SiteRentPaymentSummary } from "./SiteRentsMonthTotals";
import { SiteDelinquentSummary } from "./SiteDelinquentTotals";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";

export function SiteRentActions() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Box>
          <Button href="/" startIcon={<ArrowBackIosIcon />} size="large">
            Back to All Sites
          </Button>

          <Box
            display="flex"
            ml={10}
            style={{ alignItems: "center", height: "100%", gap: 10 }}
          >
            <div>
              <SiteHeader />
              <Typography variant="h5">{getCurrentMonthYearLabel()}</Typography>
            </div>
          </Box>
        </Box>

        <Stack justifyContent={"flex-end"}>
          <SiteDelinquentSummary />

          <Box display="flex" justifyContent="flex-end">
            <SiteRentPaymentSummary />
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          pb: 7,
          width: "100%",
          typography: "body1",
        }}
      >
        <TabContext value={value} sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Rent Roll" value="1" sx={{ fontSize: "large" }} />

              <Tab
                label="Enter Rent Due"
                value="2"
                sx={{ fontSize: "large" }}
              />

              <Tab
                label="Enter Payments"
                value="3"
                sx={{ fontSize: "large" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SiteRentRoll />
          </TabPanel>
          <TabPanel value="2">
            <SiteAddRentsDue />
          </TabPanel>
          <TabPanel value="3">
            <SiteAddPaymentsMade />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
