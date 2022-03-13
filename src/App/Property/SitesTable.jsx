import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useParams} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getAllSitesInfo } from '../../data/siteAtoms';
import { app } from '../../data/app';



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function SitesTable() {
  const sites = useRecoilValue(getAllSitesInfo);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Site</TableCell>
            <TableCell align="right"># units</TableCell>
            <TableCell align="right">current # vacant</TableCell>
            <TableCell align="right"># filled</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        {sites.map(({siteId, site}) => (
          <TableBody>
            <TableRow
              key={siteId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {site}
              </TableCell>
              <TableCell align="right"># units</TableCell>
              <TableCell align="right">current # vacant</TableCell>
              <TableCell align="right"># filled</TableCell>
              <TableCell align="right">view More (UnitTable)</TableCell>
            </TableRow>
        </TableBody>
       ))} 
        
      </Table>
    </TableContainer>
  );
}

export const SiteList = () => {
  return (
<div>
ROYOAKS Royal Oaks
FOXHOL	Fox Hollow		
MTEAST	Monroe Towne East		
HM1	Hayes Mill I		
GARDENS1	Edgewood Gardens I		
GARDENS2	Edgewood Gardens II		
HM2	Hayes Mill II		
ACRES4	Edgewood Acres IV		
ACRES	Edgewood Acres		
ACRES3	Edgewood Acres III		
MT1	Monroe Towne I		
MT2	Monroe Towne II		
ROCKWEL	Rockwell Gardens
</div>
  );
}