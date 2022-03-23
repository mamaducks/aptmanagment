import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";

import SitesTable from "../../App/Property/SitesTable";
import { Box } from "@mui/material";
import { SitesGrid } from "../../App/Property/SitesGrid";
import { UnitsGrid } from "../../App/Property/UnitsGrid";

export function SitesInfoDialog() {
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
       Company Sites 
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle textAlign="center">Sites</DialogTitle>

    
        <DialogContent>
          <Box>Employees names with access</Box>
          <SitesTable />
          <SitesGrid />
          {/* <UnitsGrid /> */}
         
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}