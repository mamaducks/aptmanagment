import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import {
  applicantListState,
  APPROVED,
  PENDING,
  REJECTED,
  WITHDRAWL,
  getApplicantInfo,
} from "../../data/applicantAtoms";

// export default function UpdateApplicantStatusDialog() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" size="small" onClick={handleClickOpen}>
//         Update Status
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Applicant name goes here</DialogTitle>
//         <DialogContent>
//           <StatusButtons />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           {/* <Button onClick={handleClose}>Subscribe</Button> */}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

export function StatusButtons() {
  const [status, setStatus] = React.useState();

  const handleStatus = (event, newStatus) => {
    setStatus(newStatus);
  };

  return (
    <ToggleButtonGroup
      sx={{ px: 1 }}
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

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function StatusMenu({ applicantId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [status, setStatus] = useRecoilState(applicantListState);
  const index = status.findIndex((item) => item.id === applicantId);
  const row = status[index];
  // const oldApplicant = useRecoilValue(getApplicantInfo(applicantId));
  // const index = status.findIndex(
  //   (listItem) => listItem.id === applicantId
  // );

  // const [item, setItem] = useState(oldApplicant || { selectedStatus: {} });

  // const selectedStatus = item.selectedStatus || {};

  const handleStatus = (event, newStatus) => {
    setStatus(
      replaceItemAtIndex(status, index, { ...row, status: newStatus })
    );
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (index === -1) {
    return null;
  }

  return (
    <div>
      {/* <div>{status}</div> */}
      <Button onClick={handleClick}>update Status</Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <ToggleButtonGroup
          sx={{ px: 1 }}
          value={row.status}
          exclusive
          onChange={handleStatus}
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
        {/* <MenuItem onClick={handleClose}>Pending</MenuItem>

        <MenuItem onClick={handleClose}>Approved</MenuItem>
        <MenuItem onClick={handleClose}>Rejected</MenuItem>
        <MenuItem onClick={handleClose}>Withdrawn</MenuItem> */}
      </Menu>
    </div>
  );
}
