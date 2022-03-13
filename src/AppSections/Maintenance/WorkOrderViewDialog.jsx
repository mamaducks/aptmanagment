import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from "react";
import { Bill } from './EnterBill';
import { WorkOrderView } from './WorkOrderView';


export default function WorkOrdersDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
       View Work Orders
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
           <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
        <DialogTitle>Work Orders</DialogTitle>
        <DialogContent>
       < WorkOrderView />
        </DialogContent>
       
      </Dialog>
    </div>
  );
}