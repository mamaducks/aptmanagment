import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from "react";
import { RentRoll } from './RentRoll';
import { RentRollSummary } from './RentRollSummary';
import DepositsTotalsTable from './DepositsTotalTable';
import DepositsList from './DepositsList';
import RentsTotalsList from './DepositsTotalList';


export default function RentRollDialog() {
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
       View Rent Roll
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Rent Information</DialogTitle>
        <DialogContent>
            <RentRollSummary />
            <DepositsList />
            <RentsTotalsList/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}