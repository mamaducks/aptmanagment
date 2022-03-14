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
import EmployeeTable from "./EmployeeTable";
import NewEmployeeDialog from "./NewEmployeeDialog";

export default function EmployeeDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Employees
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogActions sx={{ gap: 1, mr: 2 }}>
          <Button onClick={handleClose}>
            Go Back
          </Button>
          <NewEmployeeDialog />
        </DialogActions>
        <DialogTitle>Employees Information</DialogTitle>

        <DialogContent>
          <EmployeeTable />
        </DialogContent>
      </Dialog>
    </div>
  );
}
