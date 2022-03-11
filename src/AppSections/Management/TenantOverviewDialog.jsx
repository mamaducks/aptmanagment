import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from "react";
import { TenantSummary } from "./TenantSummary";



export function TenantOverview() {
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
       Tenants Overview
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Tenants Summary</DialogTitle>
        <DialogContent>
            <div>tenant current total rent balance and lease date renewal date see upcoming renewals</div>
        <TenantSummary />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
        

    );
}