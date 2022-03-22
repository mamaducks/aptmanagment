import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilValue } from "recoil";
import { applicantListState } from "../data/applicantAtoms";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function UpdateApplicant() {
  const applicantList = useRecoilValue(applicantListState);


  return (
    <>
      <div>search for applicant by name</div>
      <div>click applicant on table list</div>
      <div>takes you to applicant page(applicant list autofilled)</div>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          textAlign: "center",
          alignSelf: "center",
        }}
        subheader={<ListSubheader>Applicants</ListSubheader>}
      >
        <ListItem>
          <ListItemText id="status" primary="Status" />
          <ListItemText
            id="Date"
            primary="Date"
            sx={{ justifyContent: "end", display: "flex" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText id="time" primary="Time" />
          <ListItemText
            id="name"
            primary= "Name"
            sx={{ justifyContent: "end", display: "flex" }}
          />
        </ListItem>
      </List>


      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: "bolder"}}>Status</TableCell>
              <TableCell sx={{fontWeight: "bolder"}}>Date</TableCell>
              <TableCell sx={{fontWeight: "bolder"}}>Time</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>Name</TableCell>

              <TableCell align="right" sx={{fontWeight: "bolder"}}>Phone #</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {applicantList.map(({status, dateApplied, time, name, phone }) => (
            <TableRow
              key="key"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {status}
              </TableCell>
              <TableCell align="right">{dateApplied}</TableCell>
              <TableCell align="right">{time}</TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">{phone}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
