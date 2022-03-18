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

export function RentRollSummary() {
  const t = useRecoilValue(getAllSitesRentTotals);

  console.log("totla", t);
  return (
    <>
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
                colSpan={4}
                sx={{ fontWeight: "bolder" }}
              >
                January
              </TableCell>
              <TableCell
                align="center"
                colSpan={4}
                sx={{ fontWeight: "bolder" }}
              >
                February
              </TableCell>
              <TableCell
                align="center"
                colSpan={4}
                sx={{ fontWeight: "bolder" }}
              >
                March
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>unit #</TableCell>
              <TableCell align="right">Tenant last Name</TableCell>
              <TableCell align="right"> paid</TableCell>
              <TableCell align="right"> credit</TableCell>
              <TableCell align="right">delinquent</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right"> paid</TableCell>
              <TableCell align="right"> credit</TableCell>
              <TableCell align="right">delinquent</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right">paid</TableCell>
              <TableCell align="right">credit</TableCell>
              <TableCell align="right">delinquent</TableCell>
              <TableCell align="right">balance $</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key="key"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                unit #
              </TableCell>
              <TableCell align="right">Tenant last Name</TableCell>
              <TableCell align="right">paid $</TableCell>
              <TableCell align="right">credit $</TableCell>
              <TableCell align="right">delinquent $</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right">paid $</TableCell>
              <TableCell align="right">credit $</TableCell>
              <TableCell align="right">delinquent $</TableCell>
              <TableCell align="right">balance $</TableCell>
              <TableCell align="right">paid $</TableCell>
              <TableCell align="right">credit $</TableCell>
              <TableCell align="right">delinquent $</TableCell>
              <TableCell align="right">balance $</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
