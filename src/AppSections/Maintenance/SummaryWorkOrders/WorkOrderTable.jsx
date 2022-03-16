import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SiteCheckboxes } from "../../../App/Property/SiteCheckboxes";
import { allWorkOrders } from "../../../data/workOrderAtoms";
import { getAllHours } from "../../../data/workOrderHoursAtoms";
import { getAllParts, getPartsInfo, getWorkOrderParts } from "../../../data/partsAtom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { WorkOrderView } from "./WorkOrderView";
import WorkOrdersDialog from "./WorkOrderViewDialog";

//finished work orders
export function WorkOrderTable({partsId}) {
  const workOrderList = useRecoilValue(allWorkOrders);
  const hours = useRecoilValue(getAllHours);
  const partPrice = useRecoilValue(getAllParts);

  return (
    <>
      finished work order table
      on maintenance dash and management overview
      Site level completed work orders summary  Table view can open finished work orders view at view work orders level  can print those all at once or click for individual  ..so click checkbox to print work order #1234 
Company level current and complete work orders list 
<div>finished work order table, all work orders summary table sorted by site than date view work order</div>
      can see all sites or current site by employee loggedin
      take to work order view
      <div>total maintenance hours billed : WorkHoursBill</div>
      <div>Maintenance Work Orders Table</div>
      by date
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>date</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                site
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                work order #
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                hours billed
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                parts total
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                total billed
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                {" "}
                Finished
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                view
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workOrderList.map(({ siteId, site, workOrderId, dateRequest }) => (
              <TableRow
                key={workOrderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {dateRequest}
                </TableCell>
                <TableCell align="right">{site}</TableCell>
                <TableCell align="right">{workOrderId}</TableCell>
                <TableCell align="right">part hours</TableCell>
                <TableCell align="right"> part price</TableCell>
                <TableCell align="right">total parts and hours $</TableCell>
                <TableCell align="right">Current / Finished</TableCell>
                <TableCell align="right">
                  <WorkOrdersDialog siteId={siteId} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
