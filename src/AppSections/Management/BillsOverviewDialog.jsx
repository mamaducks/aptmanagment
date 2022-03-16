import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import { TenantSummary } from "./TenantSummary";
import { EmployeeWorkHoursTable } from "./WorkHoursBill";
import { MaintenanceOrderCosts } from "./MaintenanceCost";
import { BillSummary } from "./BillsSummary";
import { BillTable } from "../Maintenance/Billing/BillTable";

export function BillingOverview() {
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
        Billing Overview
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Billing</DialogTitle>

        <>
          bills overview rents
          <div>Bill</div>
          <div>date</div>
          <div>type of bill category , subcategory if there</div>
          <div>paid to </div>
          <div>amount paid</div>
          <div>date paid</div>
        </>
        <DialogContent>
          Year overview
          <BillTable />
          Bills Table
          <BillSummary />
         Site Maintenance Overview each site or all sites total??
          <MaintenanceOrderCosts />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
