import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { SiteDeposits } from "./SiteDeposits";
import { SiteHeader } from "../../headers/SiteHeader";
import { SitePendingDeposit } from "./SitePendingDeposit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { SiteDepositSummary } from "./SiteDepositMonthTotals";
import { SiteDelinquentSummary } from "../rents/SiteDelinquentTotals";
import { SiteRentPaymentSummary } from "../rents/SiteRentsMonthTotals";

export function SiteDepositActions() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Box sx={{ width: "100%" }}>
        <Stack>
          <SiteHeader />
          <Button href="/" startIcon={<ArrowBackIosIcon />}>
            Back to Dashboard
          </Button>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <SiteDepositSummary />
        </Box>

        {/* <Divider /> */}

        <Stack>
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
                  <Tab label="Enter Deposits" value="1" />

                  <Tab label="Posted Deposits" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{fontSize: "large"}}>
                <SitePendingDeposit />
              </TabPanel>

              <TabPanel value="2" sx={{fontSize: "large"}}>
                <SiteDeposits />
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
