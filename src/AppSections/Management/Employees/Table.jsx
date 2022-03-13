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
import { EmployeeSheet } from "./EmployeeSheet";
import { ViewEmployeeDialog } from "./ViewEmployeeDialog";

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

export default function DenseTable() {
  const employees = useRecoilValue(allEmployees);

  const [employee, setEmployee] = useState([]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="emmployeeTable">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Type of Employee</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Rate?</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="center">View Employee</TableCell>
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
                <TableCell component="th" scope="row">
                  {firstName}{" "}{lastName}
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
