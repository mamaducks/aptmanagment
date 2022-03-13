import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { getAllBillsInfo } from "../../data/billAtoms";


export function BillTable() {
  const billList = useRecoilValue(getAllBillsInfo);

  return (
    <div>
      <div>month or year to date on maintenance page</div>
      <div>
        all bills on bill view dialog can search category, paid to, month pd
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>category</TableCell>
              <TableCell align="right">Paid to</TableCell>
              <TableCell align="right">amount paid</TableCell>

              <TableCell align="right">date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {billList.map(({ category, recipient, amountPaid, datePaid, index }) => (

            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {category}
              </TableCell>
              <TableCell align="right">{recipient}</TableCell>
              <TableCell align="right">{amountPaid}</TableCell>
              <TableCell align="right">{datePaid}</TableCell>
              {/* <TableCell align="right">total to date?</TableCell> */}
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}