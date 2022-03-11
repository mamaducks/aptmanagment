import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function MaintenanceOrderCosts() {
    return (
      <>
        <div>total billed :  Costs Bill</div>
  
        <div>Maintenance Costs Table</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>site</TableCell>
                <TableCell align="right">supplies</TableCell>
                <TableCell align="right">painting supplies</TableCell>
                <TableCell align="right">snow supplies</TableCell>
                <TableCell align="right">appliance supplies</TableCell>
                <TableCell align="right">maintenance hours billed</TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key="key"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  site name
                </TableCell>
                <TableCell align="right">supplies $</TableCell>
                <TableCell align="right">painting supplies $</TableCell>
                <TableCell align="right">snow supplies $</TableCell>

                <TableCell align="right">appliance supplies $</TableCell>
                <TableCell align="right">hrs $</TableCell>
               
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div>year total costs to date?</div>
        </>
        );
        }
