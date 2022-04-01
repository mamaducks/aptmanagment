import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { SiteAddress } from "./SiteAddress";
import { SiteHeader } from "./SiteHeader";

export function SiteUnitSummary() {
  const { siteId } = useParams();

  const siteInfo = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(siteInfo);

  return (
    <Stack>
      <Box sx={{flexGrow: 2}}>

        <SiteAddress />
      </Box>

      <Paper sx={{width: "100%"}} >
        <Typography variant="h5" p={3}>
          Site Summary
        </Typography>
        <Divider />

        <Stack>
          <Box
            sx={{
              pb: 7,
              //    width: '100%',
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Upcoming Recertifications" value="1" />
                  <Tab label="Current Vacancies" value="2" />
                  {/* <Tab label="Item Three" value="3" /> */}
                </TabList>
              </Box>
              <TabPanel value="1">
                This Month
                {siteInfo.units.map((item) => (
                  <Stack>
                    <Typography>{item.unitId}</Typography>
                    <Typography>{item.dateRenewal}</Typography>
                    <Typography>Recert Button</Typography>
                  </Stack>
                ))}
                <Typography>60 days accordion</Typography>
                <Typography>90 days accordion</Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography>view waiting list this site</Typography>
                <Stack>
                  <Typography>unit id</Typography>
                  <Typography>vacant since</Typography>
                </Stack>
              </TabPanel>
              {/* <TabPanel value="3">Item Three</TabPanel> */}
            </TabContext>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}
