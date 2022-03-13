import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from "react";
import NewDepositList from './EnterDepositList';
import EnterRentList from './EnterRentList';
// import EnterRentsList from './EditableRentList';


export default function EnterRentsDialog() {
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
       Enter Rents
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Enter Rents</DialogTitle>
        <DialogContentText>
            <div>Site Name</div>
            <div>Month</div>
            </DialogContentText>
        <DialogContent>
        <EnterRentList />
       < NewDepositList />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}