import NumbersIcon from '@mui/icons-material/Numbers';
import {
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader
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
      <Box display="flex" flexDirection="column" p={2}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "fit-content",
          }}
        >
          <CardContent>
        
            <List >
              <ListSubheader sx={{fontSize: "larger"}}>Total</ListSubheader>
              <Divider sx={{ mb: 1 }} />
              <ListItem my={3} >
                <ListItemIcon sx={{minWidth: 30}}><NumbersIcon/></ListItemIcon>
                <ListItemText primary="Units" primaryTypographyProps={{fontSize: "large"}} />
  
                <ListItemText primary={siteUnits.siteSummary.totalNumberOfUnits} primaryTypographyProps={{fontSize: "large", textAlign: "end"}} />
              </ListItem>
  
              <ListItem my={3} >
              <ListItemIcon sx={{minWidth: 30}}><NumbersIcon/></ListItemIcon>
                <ListItemText primary="Upcoming Recertifications" primaryTypographyProps={{fontSize: "large"}}/>
  
                <ListItemText primary={siteUnits.siteRenewals?.length} primaryTypographyProps={{fontSize: "large", textAlign: "end"}} />
              </ListItem>
  
              <ListItem my={3}>
              <ListItemIcon sx={{minWidth: 30}}><NumbersIcon/></ListItemIcon>
                <ListItemText primary="Vacancies" primaryTypographyProps={{fontSize: "large"}}/>
  
                <ListItemText primary={siteUnits.siteSummary?.totalNumberOfVacantUnits} primaryTypographyProps={{fontSize: "large", textAlign: "end"}} />
              </ListItem>
            </List>
            {/* ))} */}
  
          </CardContent>
        </Card>
      </Box>
    );
  }
  