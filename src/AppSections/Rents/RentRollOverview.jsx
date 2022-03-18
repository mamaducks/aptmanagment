import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilValue } from "recoil";
import { getAllSitesRentTotals } from "../../data/rentsAtom";

export function RentRollOverview() {
  const rentTotals = useRecoilValue(getAllSitesRentTotals);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bolder" }}>site</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              total paid
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              total credit
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              total delinquent
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              total summary
            </TableCell>
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
              <TableCell align="right">{rentTotals.creditsTotal}</TableCell>
              <TableCell align="right">{rentTotals.delinquentTotal}</TableCell>
              <TableCell align="right">{rentTotals.totalSummary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
