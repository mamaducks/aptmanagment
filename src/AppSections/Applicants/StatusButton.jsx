import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useRecoilState } from "recoil";
import {
  //   filteredTelescopesTypes,
  applicantListState,
  filteredStatusTypes,
  PENDING,
  APPROVED,
  REJECTED,
  WITHDRAWL,
  ALL_STATUS,
} from "../../data/applicantAtoms";




export default function UpdateApplicantStatusDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleClickOpen}>
        Update Status
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Applicant name goes here</DialogTitle>
        <DialogContent>
          <StatusButtons />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function StatusButtons() {
  const [status, setStatus] = React.useState();

  const handleStatus = (event, newStatus) => {
    setStatus(newStatus);
  };

  return (
    <ToggleButtonGroup
      value={status}
      exclusive
      onChange={handleStatus}
      aria-label="applicant"
    >
      <ToggleButton value={PENDING} aria-label="pending">
        Pending
      </ToggleButton>
      <ToggleButton value={APPROVED} aria-label="approved">
        Approved
      </ToggleButton>
      <ToggleButton value={WITHDRAWL} aria-label="withdrawn">
        Withdrawn
      </ToggleButton>
      <ToggleButton value={REJECTED} aria-label="rejected">
        Rejected
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

