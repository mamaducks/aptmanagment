import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import { history } from "./helpers";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// import { UnitsGrid } from "./App/Grids/UnitsGrid";
import { Maintenence } from "./unused/Maintenance";
import { Tenants } from "./tenants/Tenants";
import { Rents } from "./unused/Rents";
// import { Management } from "./AppSections/Management/Management";
import { HomePage } from "./AppSections/HomePage";
import { ManagementSites } from "./management/ManagementSites";
import { Management } from "./management/Management";
import { SiteUnits } from "./site/SiteUnits";
import { ManagementRents } from "./management/ManagementRents";
import { ManagementUnitRents } from "./App/Grids/RentRollSummaryGrid";
import { SiteRentRoll } from "./site/SiteRentRoll";
import { SiteApplicants } from "./site/SiteApplicants";

import { ManagementEmployees } from "./management/ManagementEmployees";
import { Employee } from "./unused/Management/Employee";
// import { Applicants } from "./applicants/Applicants";
// import { NewApplicant } from "./applicants/NewApplicant";
// import ViewApplicant from "./applicants/ViewAppicant";
// import { MoveInApplicant } from "./applicants/MoveInApplicant";
import { TenantUpdate } from "./hereisthestuffyourgoingtouse/Tenants/TenantUpdates";
// import { EnterRents } from "./rents/EnterRents";
import { EnterDeposits } from "./hereisthestuffyourgoingtouse/EnterDeposits";
import { ManagementApplicants } from "./management/ManagementApplicants.jsx";
import { ManagementDeposits } from "./management/ManagementDeposits.jsx";
import { SiteDeposits } from "./site/SiteDeposits.jsx";
// import {ManagementBills} from "./App/Grids/ManagementBills"
import { FormApplicant } from "./forms/FormApplicant.jsx";
import { DialogTenant } from "./dialogs/DialogTenant.jsx";
import { DialogEmployee } from "./dialogs/DialogEmployee.jsx";
import { FormEmployee } from "./forms/FormEmployee.jsx";
import { FormRent } from "./forms/FormRent.jsx";
import { DialogPayment } from "./dialogs/DialogPayment";
import { DialogMoveOut } from "./dialogs/DialogMoveOut.jsx";
import { SitePendingDeposit } from "./site/SitePendingDeposit.jsx";
import { SiteAddRentsDue } from "./site/SiteAddRentsDue";
export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/Maintenance" element={<Maintenence />} /> */}
        {/* <Route path="/site/:siteId/enterRents" element={<EnterRents />} /> */}
        {/* <Route path="/Tenants" element={<Tenants />} /> */}
        {/* <Route path="/Applicants/new" element={<NewApplicant />} />
        <Route path="/Applicants/:applicantId" element={<ViewApplicant />} /> */}
        {/* <Route
          path="/Applicants/moveIn/:applicantId"
          element={<MoveInApplicant />}
        /> */}
        {/* <Route path="Tenants/:tenantId" element={<TenantUpdate />} /> */}
        {/* <Route path="/Rents" element={<Rents />} /> */}
        {/* <Route path="/Rents/enterdeposits" element={<EnterDeposits />} /> */}
        <Route
          path="/forms/applicant/:applicantId"
          element={<FormApplicant />}
        />
        <Route path="/forms/applicant" element={<FormApplicant />} />
        <Route path="/forms/employee" element={<FormEmployee />} />

        <Route path="/applicants" element={<ManagementApplicants />} />
        <Route path="/employees" element={<ManagementEmployees />} />
        <Route path="/rents" element={<ManagementRents />} />

        <Route path="/deposits" element={<ManagementDeposits />} />
        <Route path="/sites" element={<ManagementSites />} />
        {/* <Route path="/tenants" element={<ManagementTenants />} /> */}
        <Route path="/sites/:siteId/applicants" element={<SiteApplicants />} />
        <Route path="/sites/:siteId/rentroll" element={<SiteRentRoll />} />

        <Route path="/sites/:siteId/addrents" element={<SiteAddRentsDue />} />

        <Route path="/sites/:siteId/units" element={<SiteUnits />} />
        <Route path="/sites/:siteId/adddeposit" element={<SitePendingDeposit />} />
        <Route path="/sites/:siteId/addrents" element={<FormRent />} />
        <Route path="/sites/:siteId/deposits" element={<SiteDeposits />} />

        {/* <Route
          path="/employees/:employeeId"
          element={<Employee />}
        /> */}
        {/* <Route path="/Management/bills" element={<ManagementBills />} /> */}
        {/* <Route path="/Management" element={<Management />} /> */}
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path={routes.management.link} element={<Management />} /> */}
        {/* <Route path={routes.applicants.link} element={<Applicants />} /> */}
      </Routes>

      <DialogTenant />

      <DialogMoveOut />

      <DialogPayment />

      <DialogEmployee />
    </ThemeProvider>
  );
}
