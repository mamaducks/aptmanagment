import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dateFormatter } from "../../formatters/cellFormatters";
import { SiteAddress } from "../../headers/SiteAddress";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";
import { SiteTotalsSummary } from "./SiteTotalsSummary";


export function UnitSummary({ setTenantDialogInfo }) {
  const { siteId } = useParams();

  const siteInfo = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const vacantUnits = siteInfo.units.filter((unit) => !unit.tenant);

  console.log(siteInfo);

  return (
    <Stack>
      <Box sx={{ flexGrow: 2 }}>
        <SiteAddress />

        <SiteTotalsSummary />
      </Box>

      <Paper p={6} sx={{ width: "100%" }}>
        <Typography variant="h5" p={3}>
          Site Summary
        </Typography>
        <Divider />

        <Stack>
          <Box
            sx={{
              // pb: 7,
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
                </TabList>
              </Box>
              <TabPanel value="1">
                {siteInfo.siteRenewals.map((item) => (
                  <Stack>
                    <Typography>{item?.unitId}</Typography>
                    <Typography>
                      {dateFormatter({ value: item?.dateRenewal })}
                    </Typography>

                    <Typography>Recert Button</Typography>
                  </Stack>
                ))}
                <Typography>60 days accordion</Typography>
                <Typography>90 days accordion</Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography>view waiting list this site</Typography>
                {vacantUnits.map((vacantUnit) => (
                  <Stack>
                    <Typography>{vacantUnit.unitId}</Typography>

                    <Typography>
                      vacant since{" "}
                      {dateFormatter({ value: vacantUnit.lastMoveOut })}
                    </Typography>
                  </Stack>
                ))}
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}