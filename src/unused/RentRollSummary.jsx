import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilValue } from "recoil";
import { getAllUnitRentTotals } from "../data/rentsAtom";

export function RentRollSummary({ siteId }) {
  const units = useRecoilValue(getAllUnitRentTotals(siteId));

  console.log("totla", siteId, units);
  return (
    <>
      <div>rent roll list</div>
      <div>site</div>
      <div>
        site name TENANT APT. # LAST NAME JAN FEB MAR APR MAY JUN JUL AUG SEP
      </div>
      <div>upload deposit slip copy</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={2}
                sx={{ fontWeight: "bolder" }}
              >
                Unit Information
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{ fontWeight: "bolder" }}
              >
                carry over balance
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ fontWeight: "bolder" }}
              >
                January
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ fontWeight: "bolder" }}
              >
                February
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ fontWeight: "bolder" }}
              >
                March
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>unit #</TableCell>
              <TableCell align="right">Tenant last Name</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right"> due</TableCell>

              <TableCell align="right"> paid</TableCell>
              {/* <TableCell align="right"> credit</TableCell>
              <TableCell align="right">delinquent</TableCell> */}
              <TableCell align="right">balance $</TableCell>

              <TableCell align="right"> due</TableCell>
              <TableCell align="right"> paid</TableCell>
              {/* <TableCell align="right"> credit</TableCell>
              <TableCell align="right">delinquent</TableCell> */}
              <TableCell align="right">balance $</TableCell>

              <TableCell align="right"> due</TableCell>
              <TableCell align="right">paid</TableCell>
              {/* <TableCell align="right">credit</TableCell>
              <TableCell align="right">delinquent</TableCell> */}
              <TableCell align="right">balance $</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units.map(
              ({
                siteId,
                unitId,
                number,
                amount,
                tenantId,
                tenant,
                site,
                totals: { rentsTotal, creditsTotal, delinquentTotal },
              }) => (
                <TableRow
                  key={siteId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {number}
                  </TableCell>
                  <TableCell align="right">{tenantId}</TableCell>
                  <TableCell align="right">{creditsTotal}</TableCell>
                  <TableCell align="right"> {delinquentTotal}</TableCell>
                  <TableCell align="right">{amount}</TableCell>
                  {/* <TableCell align="right">credit $</TableCell>
 <TableCell align="right">delinquent $</TableCell> */}
                  <TableCell align="right">balance $</TableCell>
                  <TableCell align="right"> {rentsTotal}</TableCell>
                  <TableCell align="right">paid $</TableCell>
                  {/* <TableCell align="right">credit $</TableCell>
 <TableCell align="right">delinquent $</TableCell> */}
                  <TableCell align="right">balance $</TableCell>
                  <TableCell align="right"> due</TableCell>
                  <TableCell align="right">paid $</TableCell>
                  {/* <TableCell align="right">credit $</TableCell>
 <TableCell align="right">delinquent $</TableCell> */}
                  <TableCell align="right">balance $</TableCell>
                </TableRow>
              )
            )}
            <TableRow>
              <TableCell align="right" colSpan={2}>
                Totals
              </TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right"> due</TableCell>
              <TableCell align="right">paid $</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right"> due</TableCell>
              <TableCell align="right">paid $</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right"> due</TableCell>
              <TableCell align="right">paid $</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
