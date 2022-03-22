import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import { RentRollSummary } from "../../../unused/RentRollSummary";
import { RentRollDeposits } from "../../Rents/RentRoll";
// import { TenantSummary } from "./TenantSummary";

export function RentOverview({siteId}) {
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
        Rents Overview
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Rents Summary</DialogTitle>
        <DialogContent>
        {/* <RentRollSummary siteId={siteId}/> */}
        <RentRollDeposits siteId={siteId} />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
