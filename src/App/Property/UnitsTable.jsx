import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { tenantListState } from "../../data/tenantAtoms";
import { getUnitsInfo } from "../../data/unitsAtom";
import { useRecoilValue } from "recoil";

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

// const vacancy = tenant.value = null
// const vacant = checkboxIcon

export default function UnitsTable({ siteId }) {
  const site = useRecoilValue(getUnitsInfo(siteId));
  console.log("r", siteId, site);
  const unit = {};
  return (
    <>
      <Typography>{unit.siteId}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Unit</TableCell>
              <TableCell align="right">tenant name</TableCell>
              <TableCell align="right">vacant</TableCell>

              <TableCell align="right">lease date</TableCell>
              <TableCell align="right">renewal date</TableCell>
              <TableCell align="right">view maintenance to unit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {site.units.map(({ id, tenant }) => (
              <TableRow
                key="key"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="right">{tenant?.name}</TableCell>
                <TableCell align="right">{!tenant ? "Yes" : "No"}</TableCell>
                <TableCell align="right">{tenant?.dateLease}</TableCell>
                <TableCell align="right">{tenant?.renewalDate}</TableCell>

                <TableCell align="right">view maintenance to unit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
