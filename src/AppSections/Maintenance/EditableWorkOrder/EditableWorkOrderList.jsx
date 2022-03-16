import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderTableEditDialog from "./OrderTableEditDialog";
import { allWorkOrders } from "../../../data/workOrderAtoms";
import {getAllHours} from "../../../data/workOrderHoursAtoms";
import {getAllParts} from "../../../data/partsAtom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";


export function EditableWorkOrderList() {
  const workOrderList = useRecoilValue(allWorkOrders);
  const hours = useRecoilValue(getAllHours);
  const partPrice = useRecoilValue(getAllParts);

  return (
    <>
      <div>Maintenance Work Orders Table</div>
      for maintenance to update work orders enter parts and hours
      by date and show current can see employeeId ones at top of table clickable
      
      edit work order user that edits cost and parts / maintenance employee id

      Table view can open editable work orders at site level. Can see based on site permissions 
Work orders employee level can see editable work orders same as site level 

<div>current work order table, all orders current by site update work order</div>
      can see all sites or current site by employee loggedin
      take to editable work order
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: "bolder"}}>site</TableCell>

              <TableCell align="right" sx={{fontWeight: "bolder"}}>work order #</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>hours billed</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>parts total</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>total billed</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>Current or Finished</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>view</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {workOrderList.map(({site, workOrderId}) => (
            <TableRow
              key="key"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {/* {site} */}site
              </TableCell>
              <TableCell align="right">
                {/* {workOrderId} */} order Id
                </TableCell>
              <TableCell align="right">hours</TableCell>
              <TableCell align="right">prices</TableCell>
              <TableCell align="right">totalpartsandhours$</TableCell>
              <TableCell align="right">Current / Finished</TableCell>
              <TableCell align="right">
                {/* <OrderTableEditDialog workOrderId={workOrderId} /> */}
                </TableCell>
            </TableRow>
             ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>after clicked tablerow takes to editable form</div>
      <OrderTableEditDialog />
    </>
  );
}
