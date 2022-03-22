import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { RentOverview } from "./Rents/RentOverviewDialog";
import { TenantOverview } from "./TenantOverviewDialog";
import EmployeeDialog from "./Employees/EmployeesDialog";
import { BillingOverview } from "./Bills/BillsOverviewDialog";
import { SitesInfoDialog } from "./SitesInfoDialog";
import { MaintenanceBillingDialog } from "./MaintenanceBilling";

export function Management() {
  return (
    <>
     <Box
    sx={{
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'center',
      gap: 1,
      '& > *': {
        m: 1,
      },
    }}
  >
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group"> */}
        <BillingOverview />
        <RentOverview />

        <MaintenanceBillingDialog />
        <TenantOverview />
        <SitesInfoDialog />

        <EmployeeDialog />
      {/* </ButtonGroup> */}
    </Box>
      <div>header: Management</div>
      <div>Year overview</div>
      <div>add sites</div>
      <div>current totals overview year to date</div>
      <div>company billing total overview one line of totals year to date</div>
      <div>
        maintenance billing total overview one line of totals year to date
      </div>
      <div>
        RentRollSummary overview one line total in out under over year to date
        or monthly
      </div>
      <div>
        total maintenance hours billed : WorkHoursBill year to date or monthly
      </div>
      
      Year overview
    </>
  );
}
