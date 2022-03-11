import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderTableEditDialog from "./OrderTableEditDialog";

export function EditableWorkOrderList() {
  return (
    <>
      <div>Maintenance Work Orders Table</div>
      by date and show current can see employeeId ones at top of table clickable
      row to work order edit (newrequest) or one with parts/hours editable
      showing and have newrequest without parts/hours showing can have completed
      checkbox at bottom under parts hours?
      edit work order user that edits cost and parts / maintenance employee id
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>site</TableCell>

              <TableCell align="right">work order #</TableCell>
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
                site name
              </TableCell>
              <TableCell align="right"># of order</TableCell>
              <TableCell align="right">total hrs $</TableCell>
              <TableCell align="right"> total partd $</TableCell>
              <TableCell align="right">total</TableCell>
              <TableCell align="right">Current / Finished</TableCell>
              <TableCell align="right"> view order</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>after clicked tablerow takes to editable form</div>
      <OrderTableEditDialog />
    </>
  );
}
