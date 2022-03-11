import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


export function RentRoll() {
    return (
        <>

<>
        <div>rent roll list</div>
        <div>site</div>
        <div>
            site name
        TENANT																			
  APT. #	LAST NAME		JAN		FEB		MAR		APR		MAY		JUN		JUL		AUG		SEP	
        </div>
        <div>upload deposit slip copy</div>
        </>



<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      <TableCell>site</TableCell>
      <TableCell align="right">total paid</TableCell>
      <TableCell align="right">total credit</TableCell>
      <TableCell align="right">total delinquent</TableCell>
      <TableCell align="right">total summary</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    
      <TableRow
        key="key"
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          site name
        </TableCell>
        <TableCell align="right">paid $</TableCell>
        <TableCell align="right">credit $</TableCell>
        <TableCell align="right">delinquent $</TableCell>
        <TableCell align="right">summary $</TableCell>
      </TableRow>
 
  </TableBody>
</Table>
</TableContainer>
</>
    );
}