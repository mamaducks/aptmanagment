import NumbersIcon from "@mui/icons-material/Numbers";
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
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";

export function SiteTotalsSummary() {
  const { siteId } = useParams();
  const siteUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  console.log("aa", siteUnits);

  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-end" >
      <Card
        variant="outlined"
        sx={{
          // maxHeight: "fit-content",
          width: 460,

        }}
      >
        <CardContent sx={{paddingBottom: 0}}>
          <List>
            <Typography variant="h6" lineHeight={2} sx={{ textIndent: 12 }}>
              Total
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <ListItem my={3}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <NumbersIcon />
              </ListItemIcon>
              <ListItemText
                primary="Units"
                primaryTypographyProps={{ fontSize: "large" }}
              />

              <ListItemText
                primary={siteUnits.siteSummary.totalNumberOfUnits}
                primaryTypographyProps={{ fontSize: "large", textAlign: "end" }}
              />
            </ListItem>

            <ListItem my={3}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <NumbersIcon />
              </ListItemIcon>
              <ListItemText
                primary="Upcoming Recertifications"
                primaryTypographyProps={{ fontSize: "large" }}
              />

              <ListItemText
                primary={siteUnits.siteRenewals?.length}
                primaryTypographyProps={{ fontSize: "large", textAlign: "end" }}
              />
            </ListItem>

            <ListItem my={3}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <NumbersIcon />
              </ListItemIcon>
              <ListItemText
                primary="Vacancies"
                primaryTypographyProps={{ fontSize: "large" }}
              />

              <ListItemText
                primary={siteUnits.siteSummary?.totalNumberOfVacantUnits}
                primaryTypographyProps={{ fontSize: "large", textAlign: "end" }}
              />
            </ListItem>
          </List>
          {/* ))} */}
        </CardContent>
      </Card>
    </Box>
  );
}
