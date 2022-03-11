import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function SiteWorkOrderTable() {
    return (
      <>
        <div>total maintenance hours billed : WorkHoursBill</div>
  
        <div>Maintenance Work Orders </div>
        
        <div>choose site start typing or choose from dropdown </div>
        <div>have view all current month / recent months</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>work order #</TableCell>
                <TableCell align="right">hours billed</TableCell>
                <TableCell align="right">parts total</TableCell>
                <TableCell align="right">total billed</TableCell>
                <TableCell align="right">Current or Finished</TableCell>
                <TableCell align="right">view</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key="key"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                # of order
                </TableCell>
                <TableCell align="right">total hrs $</TableCell>
                <TableCell align="right"> total partd $</TableCell>
                <TableCell align="right">total</TableCell>
                <TableCell align="right">Current / Finished</TableCell>
                <TableCell align="right"> view order</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </>
        );
        }
