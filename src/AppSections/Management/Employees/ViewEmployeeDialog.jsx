import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";

import { getEmployeeInfo } from "../../../data/employeesAtoms";
import { EditEmployee } from "./EditEmployee";
import EmployeeSheetNew from "./EmployeeSheetNew";
import { Box, Divider } from "@mui/material";

export function ViewEmployeeDialog({ employeeId }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        View Employee
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        <EmployeeSheetNew employeeId={employeeId} />
        <Divider variant="middle" />
        <EditEmployee employeeId={employeeId} />

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
