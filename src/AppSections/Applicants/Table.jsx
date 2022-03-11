import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right">Name</TableCell>

            <TableCell align="right">Phone #</TableCell>
            <TableCell align="right">Race</TableCell>
            <TableCell align="right">Family Size</TableCell>
            <TableCell align="right">M/F</TableCell>
            <TableCell align="right">D/P</TableCell>
            <TableCell align="right">Income Level</TableCell>
            <TableCell align="right">Unit Size</TableCell>
            <TableCell align="right">Rental Assistance</TableCell>
            <TableCell align="right">Occupancy Cont Date??</TableCell>
            <TableCell align="right">Lease Date</TableCell>
            <TableCell align="right">Removal Date</TableCell>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}
