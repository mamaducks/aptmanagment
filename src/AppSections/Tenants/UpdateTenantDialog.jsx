import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from "react";
import { Tenant } from './MoveInTenant';
import MoveInApplicant from '../Applicants/MoveInApplicant';
import { UpdateTenant } from './TenantUpdates';


export default function UpdateTenantDialog() {
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
       Update Tenant
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle> Tenant Information</DialogTitle>
        <DialogContent>
       <UpdateTenant />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}