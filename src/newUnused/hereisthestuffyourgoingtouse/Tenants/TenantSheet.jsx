import { Paper, Stack, Typography } from "@mui/material";
// import UpdateTenantDialog from "./UpdateTenantDialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Button, Container, DialogActions } from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { tenantList, getTenantInfo } from "../../data/tenantAtoms";
import { getApplicantInfo } from "../../data/applicantAtoms";

export function TenantSheet({ tenantId }) {
  const tenant = useRecoilValue(getApplicantInfo(tenantId));

  return (
    <>
      {/* <Paper sx={{ p: "30px" }}>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>Tenant Name</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>move in date</Typography>
          </Box>
        </Stack>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>site</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>unit #</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "500px" }}>
          <Typography>lease date</Typography>
        </Box>
        <Box sx={{ width: "500px" }}>
          <Typography>lease renewal date</Typography>
        </Box>
        <Stack gap={1}>
          <Box sx={{ width: "500px" }}>
            <Typography>other tenant info?</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>maintenance to unit since move in date</Typography>
          </Box>
        </Stack>
        <Stack gap={1}>
          <Box sx={{ width: "500px" }}>
            <Typography>rent stuff for teneant</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>table of rents stuff info</Typography>
          </Box>
        </Stack>

        <div>print</div>
        <br />
         <UpdateTenantDialog /> 
      </Paper> */}

      <Container maxWidth="sm">
        <List
          sx={{
            bgcolor: "background.paper",
            width: "100%",
            fontSize: "larger",
            pl: 3,
            textAlign: "center",
          }}
          subheader={
            <ListSubheader sx={{ fontSize: "larger" }}>
              Tenant Information
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText id="fullName" primary="Tenant Name" />
            <ListItemText
              id="name"
              primary={tenant?.name}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>

          <ListItem>
            <ListItemText id="phone" primary="Phone Number" />
            <ListItemText
              id="phone"
              primary={tenant?.phone}
              textAlign="flex-end"
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="moveDate" primary="Move In Date" />
            <ListItemText
              id="moveInDate"
              primary={tenant?.moveInDate}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="site" primary="Site" />
            <ListItemText
              id="unit"
              primary={tenant?.site}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="unit" primary="Unit" />
            <ListItemText
              id="unit"
              primary={tenant?.unit}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>

          <ListItem>
            <ListItemText id="dateLease" primary="Lease Date" />
            <ListItemText
              id="dateLease"
              primary={tenant?.dateLease}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>

          <ListItem>
            <ListItemText id="renewalDate" primary="Renewal Date" />
            <ListItemText
              id="renewalDate"
              primary={tenant?.renewalDate}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
        </List>
        <div>maintenance to unit since move in date rent stuff for teneant</div>
        <div>update link or form here</div>
      </Container>
    </>
  );
}
