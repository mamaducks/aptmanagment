import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { dateFormatter } from "../../formatters/cellFormatters";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";
import { SiteTotalsSummary } from "./SiteTotalsSummary";

export function UnitSummary({ setTenantDialogInfo }) {
  const { siteId } = useParams();

  const siteInfo = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const recerts = siteInfo.siteRenewals || [];

  const vacantUnits = siteInfo.units.filter((unit) => !unit.tenant);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Box display="flex" justifyContent="flex-end">
        <SiteTotalsSummary />
      </Box>

      <Paper p={6} sx={{ width: 600 }}>
        <Typography variant="h6" lineHeight={3} sx={{ textIndent: 12 }}>
          Site Summary
        </Typography>
        <Divider />

        <Stack>
          <Box
            sx={{
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Upcoming Recertifications" value="1" />
                  <Tab label="Current Vacancies" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {!!recerts.length ? (
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      position: "relative",
                      overflow: "auto",
                      maxHeight: 240,
                      "& ul": { padding: 0 },
                    }}
                    subheader={<li />}
                  >
                    {[30, 60, 90].map((sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ul>
                          <ListSubheader>{`${sectionId} Days`}</ListSubheader>
                          {siteInfo?.siteRenewals?.map((item) => (
                            <ListItem key={`item-${sectionId}-${item}`}>
                              <ListItemText primary={`Unit ${item?.unitId}`} />
                              <ListItemText
                                primary={dateFormatter({
                                  value: item?.dateRenewal,
                                })}
                              />
                              <ListItemText primary="Recert Button" />
                            </ListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </List>
                ) : (
                  "No Upcoming Recerts"
                )}
              </TabPanel>
              <TabPanel value="2">
                {!!vacantUnits.length ? (
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 400,
                      bgcolor: "background.paper",
                      position: "relative",
                      overflow: "auto",
                      maxHeight: 280,
                      "& ul": { padding: 0 },
                    }}
                    subheader={<li />}
                  >
                    <ul>
                      <ListSubheader>Vacant Units</ListSubheader>
                      <ListItem sx={{ justifyContent: "flex-end" }}>
                        <Button
                          variant="contained"
                          href={`/sites/${siteId}/applicants`}
                          sx={{ textDecoration: "none" }}
                        >
                          View Waiting List
                        </Button>
                      </ListItem>

                      {vacantUnits?.map((vacantUnit) => (
                        <ListItem key={`item-${vacantUnit}-${vacantUnit}`}>
                          <ListItemText
                            primary={`Unit ${vacantUnit?.unitId}`}
                          />
                          <ListItemText
                            primary={`Vacant since ${dateFormatter({
                              value: vacantUnit.lastMoveOut,
                            })}`}
                          />
                        </ListItem>
                      ))}
                    </ul>
                  </List>
                ) : (
                  "No current Vacancies"
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}
