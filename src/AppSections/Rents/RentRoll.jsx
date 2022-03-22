import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RentSiteOverview } from "../Management/Rents/RentSiteDetailsDialog";

import { useRecoilValue } from "recoil";
import { getAllSitesRentTotals } from "../../data/rentsAtom";
import { RentRollSummary } from "../../unused/RentRollSummary";
import { RentOverview } from "../Management/Rents/RentOverviewDialog";
import { RentRollSummaryDialog } from "./RentRollSummaryDialog";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function RentRollDeposits() {
  const rentTotals = useRecoilValue(getAllSitesRentTotals);
  return (
    <>
      <>
        <div>rent roll overview</div>
        <div>site</div>
       
      </>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>site</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>total rent paid</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>total deposits</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>total credit</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>total delinquent</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>view details</TableCell>


              {/* <TableCell align="right">total summary</TableCell> */}
            </TableRow>
          </TableHead>
          
          <TableBody>
          {rentTotals.map(({ siteId, site, rentTotals}) => (
            <TableRow
              key={siteId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {site}
              </TableCell>
              <TableCell align="right">{rentTotals.paymentsTotal}</TableCell>
              <TableCell align="right">deposits $</TableCell>
              <TableCell align="right">{rentTotals.creditsTotal}</TableCell>
              <TableCell align="right">{rentTotals.delinquentTotal}</TableCell>
              <TableCell align="right">
                <RentRollSummaryDialog siteId={siteId}/>
                {/* <RentRollSummary siteId={siteId}/> */}
                </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
