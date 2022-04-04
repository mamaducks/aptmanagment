import NumbersIcon from "@mui/icons-material/Numbers";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dateFormatter, phoneFormatter } from "../../formatters/cellFormatters";
import {
  getSiteWithTenantsSummaryInfo
} from "../../state/sites";



export function TenantInfoCard() {
  const { siteId, unitId, applicantId } = useParams();

  const { units } = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  // const tenant = useRecoilValue(getApplicantsWithNameMap).get(applicantId);
  const tenant = units.find((item) => item.unitId === unitId);

  // const tenantInfo = siteWithUnits.units.find(
  //   (item) => `${item.unitId}-${item.tenant}`
  // );

  // const info = tenantInfo.applicants.find(
  //   (item) => `${item.applicantId}-${item.primaryPhone}-${item.dateRenewal}`
  // );

  //console.log("cccc", tenant);

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: "fit-content",
        flexGrow: 1,
        maxWidth: 700,
      }}
    >
      <CardContent>
        <List>
          {/* <ListSubheader>Tenant Info</ListSubheader> */}
          <ListItem my={3}>
            <ListItemIcon>
              <NumbersIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Unit  ${unitId}`}
              secondary=""
              primaryTypographyProps={{ fontSize: "large" }}
            />
            <ListItemText
              primary={dateFormatter({ value: tenant.dateMoveIn })}
              secondary="Move-In Date"
              primaryTypographyProps={{ fontSize: "large" }}
              sx={{ textAlign: "end" }}
            />

            {/* <ListItemText
              primary={unitId}
              primaryTypographyProps={{ fontSize: "large", textAlign: "end" }}
            /> */}
          </ListItem>
          <Divider sx={{ mb: 1 }} />
          <ListItem my={3}>
            {/* <ListItemIcon>
              <PersonIcon />
            </ListItemIcon> */}
            {/* <ListItemText
              primary="tenant"
              primaryTypographyProps={{ fontSize: "large" }}
            /> */}

            <ListItemText
              primary={tenant.applicantsName}
              secondary="Tenant"
              primaryTypographyProps={{ fontSize: "large" }}
            />
          </ListItem>
          <ListItem>
            {/* <ListItemText
              primary="phone number"
              primaryTypographyProps={{ fontSize: "large" }}
            /> */}

            {/* <ListItemIcon>
              <EventIcon />
            </ListItemIcon> */}

            <ListItemText
              primary={phoneFormatter({ value: tenant.applicantsPhone })}
              secondary="Phone Number"
              primaryTypographyProps={{ fontSize: "large" }}
              // sx={{textAlign: "end"}}
            />
          </ListItem>
          <ListItem textAlign="center">
            <ListItemText
              primary={dateFormatter({ value: tenant.dateMoveIn })}
              secondary="Move-In Date"
              primaryTypographyProps={{ fontSize: "large" }}
              // sx={{textAlign: "end"}}
            />

            <ListItemText
              primary={dateFormatter({ value: tenant.dateLease })}
              secondary="Lease Date"
              primaryTypographyProps={{ fontSize: "large" }}
            />

            <ListItemText
              primary={dateFormatter({ value: tenant.dateRenewal })}
              secondary="Recertify Date"
              primaryTypographyProps={{ fontSize: "large" }}
              // sx={{textAlign: "end"}}
            />
          </ListItem>

          {/* <ListItemText
              primary={dateFormatter({ value: tenant.dateRenewal })}
              primaryTypographyProps={{ fontSize: "large", textAlign: "end" }}
            /> */}
          {/* </ListItem> */}
        </List>
      </CardContent>
    </Card>
  );
}
