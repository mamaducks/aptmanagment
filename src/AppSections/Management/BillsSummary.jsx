import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getBillsInfo, getBillsInfoNew } from "../../data/billAtoms";
import { useRecoilValue } from "recoil";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   // const rows = [
//   //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   //   createData('Eclair', 262, 16.0, 24, 6.0),
//   //   createData('Cupcake', 305, 3.7, 67, 4.3),
//   //   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   // ];
/*
billType: "company"
categoryId: "electric"
desc: "Electric Bills"
total: 223.54
*/
export function BillTable() {
  // const bills = useRecoilValue(getBillsInfo);
  const billInfo = useRecoilValue(getBillsInfoNew);
  console.log("BillTable", billInfo);
  return (
    <>
      {billInfo.map((item) => (
        <Paper>
          <Typography>{item.billType}</Typography>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  {item.categories.map((item) => (
                    <TableCell component="th" scope="row">
                      {item.desc}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow
                  key="key"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {item.categories.map((item) => (
                    <TableCell component="th" scope="row">
                      ${(item.total || 0).toLocaleString()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ))}
    </>
  );
}
export function BillSummary() {
  const bills = useRecoilValue(getBillsInfo);
  console.log("bills", bills);
  return (
    <>
      <BillTable />
    </>
  );
}

export function BillsList() {
  return (
    <List>
      <ListSubheader>bill</ListSubheader>
      <ListItem>
        <ListItemText primary="bill cat" secondary="bill amt" />
      </ListItem>
    </List>
  );
}
