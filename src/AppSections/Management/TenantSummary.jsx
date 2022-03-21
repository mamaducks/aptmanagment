import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useRecoilValue } from 'recoil';
import { tenantList } from "../../data/tenantAtoms";


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
  const tenants = useRecoilValue(tenantList)
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
      <TableCell sx={{fontWeight: "bolder"}}>unit</TableCell>
      <TableCell align="right" sx={{fontWeight: "bolder"}}>name</TableCell>
      <TableCell align="right" sx={{fontWeight: "bolder"}}>move in date</TableCell>
      <TableCell align="right" sx={{fontWeight: "bolder"}}>total credit/delinquent</TableCell>
      <TableCell align="right" sx={{fontWeight: "bolder"}}>renew lease date</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {tenants.map((item) => (
      <TableRow
        key="key"
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        {item.unit}
        </TableCell>
        <TableCell align="right">{item.tenantName}</TableCell>
        <TableCell align="right">{item.moveInDate}</TableCell>
        <TableCell align="right">delinquent or credit $</TableCell>
        <TableCell align="right">{item.renewalDate}</TableCell>
      </TableRow>
   ))}
  </TableBody>
</Table>
</TableContainer>
</>
    );
}