import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useRecoilValue } from "recoil";

import { getApplicantInfo } from "../data/applicantAtoms";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ViewApplicant() {
  const { applicantId } = useParams();
  const applicant = useRecoilValue(getApplicantInfo(applicantId));
  //   console.log(employee, employeeId);

  // var fullName = applicant.firstName + " " + applicant.lastName;

  return (
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
            Applicant Information
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText id="fullName" primary="Applicant Name" />
          <ListItemText
            id="name"
            // primary={fullName}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="phone" primary="Phone Number" />
          <ListItemText
            id="phone"
            primary={applicant?.phone}
            textAlign="flex-end"
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="dateApplied" primary=" Date Applied" />
          <ListItemText
            id="status"
            primary={applicant?.dateApplied}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="gender" primary="Gender" />
          <ListItemText
            id="gender"
            primary={applicant?.gender}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="race" primary=" Race" />
          <ListItemText
            id="rate"
            primary={applicant?.race}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="familySize" primary=" Family Size" />
          <ListItemText
            id="rate"
            primary={applicant?.familySize}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="incomeLevel" primary=" Income Level" />
          <ListItemText
            id="incomeLevel"
            primary={applicant?.incomeLevel}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="stories" primary=" Preferences" />
          <ListItemText
            id="rate"
            primary={applicant?.stories}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="stories" primary=" Preferences" />
          <ListItemText
            id="rate"
            primary={applicant?.stories}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>
      </List>
    </Container>
  );
}
