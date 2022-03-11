import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, FormControl, FormGroup, FormLabel, Paper, Stack, TextField } from '@mui/material';


export function BillTable() {
    return (
<div>
<div>month or year to date</div>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
<TableHead>
  <TableRow>
    <TableCell>category</TableCell>
    <TableCell align="right">category</TableCell>
    <TableCell align="right">paid to</TableCell>
    <TableCell align="right">amount paid</TableCell>

    <TableCell align="right">date</TableCell>
    <TableCell align="right">total</TableCell>

  </TableRow>
</TableHead>
<TableBody>
    <TableRow
      key="key"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
      category
      </TableCell>
      <TableCell align="right">company or contractor name</TableCell>
      <TableCell align="right">$ amt paid</TableCell>
      <TableCell align="right">date</TableCell>
      <TableCell align="right">total to date?</TableCell>
    </TableRow>
</TableBody>
</Table>
</TableContainer>

</div>
    );
}