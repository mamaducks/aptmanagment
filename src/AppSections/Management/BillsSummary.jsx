import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   // const rows = [
//   //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   //   createData('Eclair', 262, 16.0, 24, 6.0),
//   //   createData('Cupcake', 305, 3.7, 67, 4.3),
//   //   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   // ];

export function BillSummary() {
  return (
    <>
      <div>total maintenance hours billed : WorkHoursBill</div>

      <div>Maintenance Bills</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>flooring</TableCell>
              <TableCell align="right">painting</TableCell>
              <TableCell align="right">appliances</TableCell>
              <TableCell align="right">snow</TableCell>
              <TableCell align="right">lawn</TableCell>
              <TableCell align="right">vehicle</TableCell>
              <TableCell>trash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key="key"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                $ flooring
              </TableCell>
              <TableCell align="right">$ painting</TableCell>
              <TableCell align="right">$ appliances</TableCell>
              <TableCell align="right"> $ snow</TableCell>
              <TableCell align="right">$ lawn</TableCell>
              <TableCell align="right"> $ vehicle</TableCell>
              <TableCell align="right"> $ trash</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      Year overview
      <div>Company Bills</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>electric</TableCell>
              <TableCell align="right">phones/internet</TableCell>
              <TableCell align="right">contractors</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key="key"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                $ electric
              </TableCell>
              <TableCell align="right">$ phones/internet</TableCell>
              <TableCell align="right">$ contractors</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
