import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilValue } from "recoil";
import { allEmployees } from "../../../data/employeesAtoms";
import { ViewEmployeeDialog } from "./ViewEmployeeDialog";

export default function EmployeeTable() {
  const employees = useRecoilValue(allEmployees);

  
  return (
    <TableContainer component={Paper} pb={5}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="emmployeeTable">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{fontWeight: "bolder"}}>Employee Name</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Phone Number</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Type of Employee</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Start Date</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>Rate?</TableCell>
            <TableCell align="right" sx={{fontWeight: "bolder"}}>End Date</TableCell>
            <TableCell align="center" sx={{fontWeight: "bolder"}}>View Employee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(
            ({
              employeeId,
              dateHired,
              firstName,
              lastName,
              phone,
              employeeType,
              endDate,
              rate,
            }) => (
              <TableRow
                key={employeeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell  component="th" scope="row">
                  {firstName} {lastName}
                </TableCell>
                <TableCell align="right">{phone}</TableCell>
                <TableCell align="right">{employeeType}</TableCell>

                <TableCell align="right">{dateHired}</TableCell>

                <TableCell align="right">{rate}</TableCell>
                <TableCell align="right">{endDate}</TableCell>
                <TableCell align="center">
                  <ViewEmployeeDialog employeeId={employeeId} />
                </TableCell>
                {/* <ViewEmployeeDialog /> */}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
