import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SiteCheckboxes } from "../../App/Property/SiteCheckboxes";
import { workOrderState } from "../../data/workOrderAtoms";
import {getAllHours} from "../../data/workOrderHoursAtoms";
import {getAllParts} from "../../data/partsAtom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";


export function WorkOrderTable() {
  const workOrderList = useRecoilValue(workOrderState);
  const hours = useRecoilValue(getAllHours);
  const partPrice = useRecoilValue(getAllParts);

  return (
    <>
      <div>total maintenance hours billed : WorkHoursBill</div>
      <div>Maintenance Work Orders Table</div>
      by date
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>site</TableCell>
              <TableCell align="right">work order #</TableCell>
              <TableCell align="right">hours billed</TableCell>
              <TableCell align="right">parts total</TableCell>
              <TableCell align="right">total billed</TableCell>
              <TableCell align="right">Current or Finished</TableCell>
              <TableCell align="right">view</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workOrderList.map(({site, }) => (
   <TableRow
              key="key"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {site}
              </TableCell>
              <TableCell align="right"># of order</TableCell>
              <TableCell align="right">{hours}</TableCell>
              <TableCell align="right"> {partPrice}</TableCell>
              <TableCell align="right">total parts and hours $</TableCell>
              <TableCell align="right">Current / Finished</TableCell>
              <TableCell align="right"> view order</TableCell>
            </TableRow>

            ))}
         
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
