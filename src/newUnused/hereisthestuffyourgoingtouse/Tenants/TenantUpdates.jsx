import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Container } from "@mui/material";
import { useRecoilValue } from "recoil";
import { getApplicantInfo } from "../../data/applicantAtoms";
import { useCallback, useState } from "react";

export function TenantUpdate({ tenantId }) {
  const tenant = useRecoilValue(getApplicantInfo(tenantId));

  const [item, setItem] = useState({});

  const addProps = useCallback(
    ({ name, label, type = "text" }) => {
      const setFieldValue = ({ target: { name, value } }) =>
        setItem((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: item[name],
      };
    },
    [item]
  );

  //   const updateTenant = useCallback(() => {
  //     setTenant((tenants) => [...tenants, item]);
  //   }, [item, setTenant]);

  return (
    <>
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
      </Container>
    </>
  );
}
