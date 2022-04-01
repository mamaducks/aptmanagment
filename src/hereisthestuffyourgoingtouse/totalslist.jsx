import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";

export function SiteTotalsSummary() {
    const { siteId } = useParams();
    const siteUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId)).units;
  
    //   const t = useRecoilValue(getSiteTenantSummaryInfo(siteId))
    console.log("aa", siteUnits);
  
    return (
      <Box display="flex" flexDirection="column" p={2}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "fit-content",
          }}
        >
          <CardContent>
            <Typography variant="h5" pb={3}>
              Total
            </Typography>
  
            <Divider sx={{ mb: 1 }} />
            {/* {siteUnits.map((item) => ( */}
            <List>
              <ListSubheader>This Month</ListSubheader>
              <ListItem my={3}>
                <ListItemText primary="# units" />
  
                <ListItemText primary={siteUnits.totalNumberOfUnits} />
              </ListItem>
  
              <ListItem my={3}>
                <ListItemText primary="# certifications expiring this month" />
  
                <ListItemText primary="value" />
              </ListItem>
  
              <ListItem my={3}>
                <ListItemText primary="# vacancies" />
  
                <ListItemText primary={siteUnits.totalNumberOfVacantUnits} />
              </ListItem>
            </List>
            {/* ))} */}
  
            <Divider />
          </CardContent>
        </Card>
      </Box>
    );
  }
  