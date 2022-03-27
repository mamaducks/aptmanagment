import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

import { getEmployeeInfo } from "../../data/employeesAtoms";
import { Container } from "@mui/material";

export function Employee() {
    const { employeeId } = useParams();

  const employee = useRecoilValue(getEmployeeInfo(employeeId));

//   var fullName = employee.firstName + " " + employee.lastName;

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
            Employee Information
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText id="fullName" primary="Employee Name" />
          {/* <ListItemText
            id="name"
            primary={fullName}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          /> */}
        </ListItem>

        <ListItem>
          <ListItemText id="phone" primary="Phone Number" />
          <ListItemText
            id="phone"
            // primary={employee.phone}
            textAlign="flex-end"
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="startDate" primary="Start Date" />
          <ListItemText
            id="startDate"
            // primary={employee.dateHired}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="employeeType" primary="Employee Type" />
          <ListItemText
            id="employeeType"
            // primary={employee.employeeType}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText id="rate" primary="Pay Rate" />
          <ListItemText
            id="rate"
            // primary={employee.rate}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ListItem>
      </List>
    </Container>
  );
}
