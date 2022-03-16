import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
// import { TenantSummary } from "./TenantSummary";
import { EmployeeWorkHoursTable } from "./WorkHoursBill";
import { MaintenanceOrderCosts } from "./MaintenanceCost";
// import { BillSummary } from "./BillsSummary";
// import { BillTable } from "../Maintenance/BillTable";
// import SitesTable from "../../App/Property/SitesTable";

export function MaintenanceBillingDialog() {
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
        Maintenance
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Maintenance Billing</DialogTitle>

        <DialogContent>
          <EmployeeWorkHoursTable />
          Site Maintenance Overview each site
          <MaintenanceOrderCosts />
          Maintenance Parts List and cost - list or table
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
