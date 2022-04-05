import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, List, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dateFormatter } from "../../formatters/cellFormatters";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";
import {RecertListScroll, VacantListScroll} from "../StickyScroll";
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
    <Stack > 
      <Box display="flex" justifyContent="flex-end" >
        <SiteTotalsSummary />
      </Box>

      <Paper p={6}  sx={{ width: 600 }}>
        <Typography variant="h6" lineHeight={3} sx={{ textIndent: 12 }}>
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
              <Box sx={{ borderColor: "divider" }} >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Upcoming Recertifications" value="1" />
                  <Tab label="Current Vacancies" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {/* {siteInfo.siteRenewals.map((item) => (
                  <Stack>
                    <Typography>{item?.unitId}</Typography>
                    <Typography>
                      {dateFormatter({ value: item?.dateRenewal })}
                    </Typography>

                    <Typography>Recert Button</Typography>
                  </Stack>
                ))} */}
                <RecertListScroll />
             
              </TabPanel>
              <TabPanel value="2">

                <VacantListScroll />
                {/* {vacantUnits.map((vacantUnit) => ( 
                  <Stack>
                    {/* <Typography>{vacantUnit.unitId}</Typography>

                    <Typography>
                      vacant since{" "}
                      {dateFormatter({ value: vacantUnit.lastMoveOut })}
                    </Typography>
                  </Stack> */}
                {/* ))} */}
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}
