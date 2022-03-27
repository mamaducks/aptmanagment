import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilValue } from "recoil";
import { allHours } from "../../data/workOrderHoursAtoms";

export function EmployeeWorkHoursTable() {
  const hours = useRecoilValue(allHours)
    return (
      <>
        <div>total maintenance hours billed : WorkHoursBill</div>
  
        <div>Maintenance Work Orders Table</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: "bolder"}}>employee</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>site</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>hours billed</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>view work orders by employee</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {hours.map((item) => (
                 <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.employeeId}
                </TableCell>
                <TableCell align="right">{item.siteId}</TableCell>
                <TableCell align="right">{item.hoursBilled}</TableCell>
                <TableCell align="right"> view work orders</TableCell>
               
              </TableRow>
              ))}
             
            </TableBody>
          </Table>
        </TableContainer>
        </>
        );
        }

