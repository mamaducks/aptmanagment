import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { SiteHeader } from "../../headers/SiteHeader";
import { SiteDepositSummary } from "./SiteDepositMonthTotals";
import { SiteDeposits } from "./SiteDeposits";
import { SitePendingDeposit } from "./SitePendingDeposit";

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
                <TabList onChange={handleChange} sx={{ fontSize: "large" }}>
                  <Tab
                    label="Enter Deposits"
                    value="1"
                    sx={{ fontSize: "large" }}
                  />

                  <Tab
                    label="Posted Deposits"
                    value="2"
                    sx={{ fontSize: "large" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <SitePendingDeposit />
              </TabPanel>

              <TabPanel value="2">
                <SiteDeposits />
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
