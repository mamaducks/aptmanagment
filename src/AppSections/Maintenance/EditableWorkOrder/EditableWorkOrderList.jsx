import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderTableEditDialog from "./OrderTableEditDialog";
import { allWorkOrderBills } from "../../../data/workOrderAtoms";
import {getAllHours} from "../../../data/workOrderHoursAtoms";
import {getAllParts} from "../../../data/partsAtom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {  allWorkOrders } from "../../../data/workOrderAtoms";


export function EditableWorkOrderList() {
  const workOrderList = useRecoilValue(allWorkOrderBills);
  const hours = useRecoilValue(getAllHours);
  const partPrice = useRecoilValue(getAllParts);
  const openWorkOrders = useRecoilValue(allWorkOrders)

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
              <TableCell align="right" sx={{fontWeight: "bolder"}}> date</TableCell>

              <TableCell align="right" sx={{fontWeight: "bolder"}}>work order #</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>hours billed</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>parts total</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>total billed</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>Current or Finished</TableCell>
              <TableCell align="right" sx={{fontWeight: "bolder"}}>view</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {openWorkOrders.map(({ siteId, site, workOrderId, dateRequest, totalHours, totalPartPrice, totalPartsHours, workStatus }) => (
            <TableRow
              key={siteId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {/* {site} */}{site}
              </TableCell>
              <TableCell align="right">
                {dateRequest} 
                </TableCell>
              <TableCell align="right">
                {workOrderId} 
                </TableCell>
              <TableCell align="right">{totalHours}</TableCell>
              <TableCell align="right">{totalPartPrice}</TableCell>
              <TableCell align="right">{totalPartsHours}</TableCell>
              <TableCell align="right">{workStatus}</TableCell>
              <TableCell align="right">
                <OrderTableEditDialog  />
                </TableCell>
            </TableRow>
             ))}
          </TableBody>
        </Table>
      </TableContainer>
     
    </>
  );
}
