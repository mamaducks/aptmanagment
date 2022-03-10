import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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


export function TenantSummary() {
    return (
        <>
<div>


 for management
view rents : RentRollSummary
totals by site
</div>
<div>SiteName</div>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      <TableCell>unit</TableCell>
      <TableCell align="right">name</TableCell>
      <TableCell align="right">move in date</TableCell>
      <TableCell align="right">total credit/delinquent</TableCell>
      <TableCell align="right">renew lease date</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    
      <TableRow
        key="key"
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        unit #
        </TableCell>
        <TableCell align="right">tenant name</TableCell>
        <TableCell align="right">move in date</TableCell>
        <TableCell align="right">delinquent or credit $</TableCell>
        <TableCell align="right">renew lease date</TableCell>
      </TableRow>
 
  </TableBody>
</Table>
</TableContainer>
</>
    );
}