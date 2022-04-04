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

export function RentRollDetails() {
  const rentTotals = useRecoilValue(getAllSitesRentTotals);

  return (
    <>
      <div>rent details summary</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }} colSpan={2}>
                unit info
              </TableCell>
              <TableCell
                align="right"
                colSpan={4}
                sx={{ fontWeight: "bolder" }}
              >
                jan
              </TableCell>
              <TableCell
                align="right"
                colSpan={4}
                sx={{ fontWeight: "bolder" }}
              >
                feb
              </TableCell>

              <TableCell
                align="right"
                colSpan={4}
                sx={{ fontWeight: "bolder" }}
              >
                march
              </TableCell>
              {/* <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                summary
              </TableCell> */}
            </TableRow>
            <TableRow>

              <TableCell
            //   component="th" scope="row"
                sx={{ fontWeight: "bolder" }}
                colSpan={2}
              />
                <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total due
              </TableCell>  
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total paid
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                +/-
              </TableCell>
              {/* <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total delinquent
              </TableCell> */}
              <TableCell>
                  balance
              </TableCell>

              <TableCell
                align="right"
                sx={{ fontWeight: "bolder" }}
                // colSpan={3}
              >
                total due
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total paid
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              +/-
              </TableCell>
              {/* <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total delinquent
              </TableCell> */}
              <TableCell>
                  balance
              </TableCell>

              <TableCell
                align="right"
                sx={{ fontWeight: "bolder" }}
                // colSpan={3}
              >
                total due
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total paid
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              +/-
              </TableCell>
              {/* <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total delinquent
              </TableCell> */}
              <TableCell>
                  balance
              </TableCell>
              {/* <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total summary
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rentTotals.map(({ siteId, site, units, rents, rentTotals }) => (
              <TableRow
                key="key"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {units}
                  unit
                </TableCell>
                <TableCell align="right">tenant</TableCell>

                <TableCell align="right">
                    {/* {rents} */}
                    rent
                    </TableCell>
                <TableCell align="right">paid $</TableCell>
                <TableCell align="right">green credit red delinquent $</TableCell>
                {/* <TableCell align="right">delinquent $</TableCell> */}
                <TableCell align="right">balance $</TableCell>

                <TableCell align="right">
                    {/* {rents} */}
                    rent
                    </TableCell>

                <TableCell align="right">paid $</TableCell>
                <TableCell align="right">green credit red delinquent $</TableCell>
                {/* <TableCell align="right">delinquent $</TableCell> */}
                <TableCell align="right">balance $</TableCell>

                <TableCell align="right">
                    {/* {rents} */}
                    rent
                    </TableCell>

                <TableCell align="right">paid $</TableCell>
                <TableCell align="right">green credit red delinquent $</TableCell>
                {/* <TableCell align="right">delinquent $</TableCell> */}
                <TableCell align="right">current balance $</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
