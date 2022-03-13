import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import { Employee } from "./EmployeeList";
import { EditEmployee } from "./EditEmployee";
import { Paper, Stack, Typography } from "@mui/material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { getEmployeeInfo } from "../../../data/employeesAtoms";

export default function EditEmployeeDialog({ employeeId }) {
  const employee = useRecoilValue(getEmployeeInfo(employeeId));

  var fullName = employee.firstName + " " + employee.lastName;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Employee
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Employee Information</DialogTitle>
        <DialogContent>

          <EditEmployee employeeId={employeeId} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
