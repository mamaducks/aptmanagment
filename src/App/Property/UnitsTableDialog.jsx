import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import UnitsTable from "./UnitsTable";
import { useRecoilValue } from "recoil";
import { getSiteInfo } from "../../data/siteAtoms";

export default function UnitsDialog({ siteId, siteName }) {
    // const siteName = useRecoilValue(getSiteInfo(siteId))
    // {siteName.map((item) => ())}
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>View Units Info</Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
            <DialogTitle sx={{ textAlign: "center" }}>{siteName} Information</DialogTitle>   
       
        <DialogContent>
          <UnitsTable siteId={siteId} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
