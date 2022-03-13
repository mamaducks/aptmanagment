import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilValue } from "recoil";
import { applicantListState } from "../../data/applicantAtoms";
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

export default function WaitingListTable() {
  const applicantList = useRecoilValue(applicantListState);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "bolder"}}>Status</TableCell>
            <TableCell sx={{fontWeight: "bolder"}}>Date</TableCell>
            <TableCell sx={{fontWeight: "bolder"}}>Time</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Name</TableCell>

            <TableCell align="right" sx={{fontWeight: "bolder"}}>Phone #</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Race</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Family Size</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>M/F</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>D/P</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Income Level</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Unit Size</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Rental Assistance</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Occupancy Cont Date??</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Lease Date</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Removal Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key="key"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Status pending reject approve
            </TableCell>
            <TableCell align="right">Date applied</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone #</TableCell>
            <TableCell align="right">Race code</TableCell>
            <TableCell align="right">Family Size #</TableCell>
            <TableCell align="right">M/F</TableCell>
            <TableCell align="right">D/P yes no</TableCell>
            <TableCell align="right">Income Level code</TableCell>
            <TableCell align="right">Unit Size 1 2</TableCell>
            <TableCell align="right">Rental Assistance yes no</TableCell>
            <TableCell align="right">Occupancy Cont Date??</TableCell>
            <TableCell align="right">Lease Date</TableCell>
            <TableCell align="right">Removal Date</TableCell>
          </TableRow>
          {applicantList.map(({index, dateApplied, name, phone, status, gender, race, familySize, beds, incomeLevel, rentalAssistance }) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {status}
              </TableCell>
              <TableCell align="right">{dateApplied}</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">{phone}</TableCell>
              <TableCell align="right">{race}</TableCell>
              <TableCell align="right">{familySize}</TableCell>
              <TableCell align="right">{gender}</TableCell>
              <TableCell align="right">D/P yes no</TableCell>
              <TableCell align="right">{incomeLevel}</TableCell>
              <TableCell align="right">{beds}</TableCell>
              <TableCell align="right">{rentalAssistance}</TableCell>
              <TableCell align="right">Occupancy Cont Date??</TableCell>
              <TableCell align="right">Lease Date</TableCell>
              <TableCell align="right">Removal Date</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
