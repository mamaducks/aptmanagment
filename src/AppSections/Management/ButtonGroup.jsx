import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { RentOverview } from "./RentOverviewDialog";
import { TenantOverview } from "./TenantOverviewDialog";
import EmployeeDialog from "./Employees/EmployeesDialog";
import { BillingOverview } from "./BillsOverviewDialog";
import { SitesInfoDialog } from "./SitesInfoDialog";
import { MaintenanceBillingDialog } from "./MaintenanceBilling";

export default function VariantButtonGroup() {
  return (
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
  );
}
