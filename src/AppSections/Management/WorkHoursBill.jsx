import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function EmployeeWorkHoursTable() {
    return (
      <>
        <div>total maintenance hours billed : WorkHoursBill</div>
  
        <div>Maintenance Work Orders Table</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>employee</TableCell>
                <TableCell align="right">site</TableCell>
                <TableCell align="right">hours billed</TableCell>
                <TableCell align="right">view work orders by employee</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key="key"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  employee name
                </TableCell>
                <TableCell align="right">site worked</TableCell>
                <TableCell align="right">hrs $</TableCell>
                <TableCell align="right"> view work orders</TableCell>
               
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </>
        );
        }

