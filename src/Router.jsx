import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import { history } from "./helpers";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
// import { UnitsGrid } from "./App/Grids/UnitsGrid";
import { Maintenence } from "./unused/Maintenance";
import { Tenants } from "./mightUse/tenants/Tenants";
// import { Management } from "./AppSections/Management/Management";
import { SitesDashboard } from "./leonaPages/HomePage";
import { ManagementSites } from "./leonaPages/management/ManagementSites";
import { Management } from "./newUnused/Management";
import { SiteUnits } from "./leonaPages/sites/SiteUnits";
import { ManagementRents } from "./mightUse/ManagementRents";
import { ManagementUnitRents } from "./newUnused/Grids/RentRollSummaryGrid";
import { SiteRentRoll } from "./leonaPages/sites/SiteRentRoll";
import { SiteApplicants } from "./leonaPages/applicants/SiteApplicants";
import { ManagementRentSummary } from "./leonaPages/management/ManagementRentSummary";

import { ManagementEmployees } from "./leonaPages/employees/ManagementEmployees";
import { Employee } from "./unused/Management/Employee";
// import { NewApplicant } from "./applicants/NewApplicant";
// import ViewApplicant from "./applicants/ViewAppicant";
// import { MoveInApplicant } from "./applicants/MoveInApplicant";
// import { EnterRents } from "./rents/EnterRents";
import { ManagementApplicants } from "./leonaPages/applicants/ManagementApplicants.jsx";
import { ManagementDeposits } from "./newUnused/management/ManagementDeposits.jsx";
import { SiteDeposits } from "./leonaPages/deposits/SiteDeposits.jsx";
// import {ManagementBills} from "./App/Grids/ManagementBills"
import { FormApplicant } from "./forms/FormApplicant.jsx";
import { DialogTenant } from "./dialogs/DialogTenant.jsx";
import { DialogEmployee } from "./dialogs/DialogEmployee.jsx";
import { FormEmployee } from "./forms/FormEmployee.jsx";
import { FormRent } from "./forms/FormRent.jsx";
import { DialogPayment } from "./dialogs/DialogPayment";
import { DialogMoveOut } from "./dialogs/DialogMoveOut.jsx";
import { SitePendingDeposit } from "./leonaPages/deposits/SitePendingDeposit.jsx";
import { SiteAddRentsDue } from "./leonaPages/rents/AddRentsDue";
import { SiteAddPaymentsMade } from "./leonaPages/rents/AddPaymentsMade.jsx";
import { SiteRentActions } from "./leonaPages/rents/SiteRentsActions.jsx";
import { SiteDepositActions } from "./leonaPages/deposits/SiteDepositActions.jsx";
import { UnitLedger } from "./leonaPages/management/ManagementUnitLedger.jsx";
import { TenantInfo } from "./leonaPages/tenant/TenantInfo.jsx";
import { TenantLedger } from "./leonaPages/tenant/TenantLedger.jsx";
import { ManagementSiteRentRoll } from "./leonaPages/management/ManagementSiteRentRoll.jsx";
import { UnitSummary } from "./leonaPages/units/UnitSummary.jsx";

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/applicants" element={<ManagementApplicants />} />
        <Route path="/sites/:siteId/applicants" element={<SiteApplicants />} />

        <Route path="/forms/applicant" element={<FormApplicant />} />
        <Route
          path="/forms/applicant/:applicantId"
          element={<FormApplicant />}
        />

        {/* <Route path="/applicants" element={<ManagementApplicants />} /> */}

        <Route path="/deposits" element={<ManagementDeposits />} />
        <Route
          path="/sites/:siteId/deposits"
          element={<SiteDepositActions />}
        />

        <Route path="/management/rents" element={<ManagementRentSummary />} />
        <Route
          path="/management/rents/sites/:siteId/siteLedger"
          element={<ManagementSiteRentRoll />}
        />
        <Route
          path="/management/rents/sites/:siteId/siteLedger/:unitId"
          element={<UnitLedger />}
        />
        <Route path="/management/sites" element={<ManagementSites />} />
        <Route path="/sites/:siteId/units" element={<SiteUnits />} />

             <Route
          path="/sites/:siteId/:unitId/:applicantId"
          element={<TenantInfo />}
        />

        {/* <Route path="/management/rents" element={<ManagementRentSummary />} /> */}
        {/* <Route path="/sites/:siteId/rentroll" element={<SiteRentActions />} /> */}
        {/* <Route path="management/sites/:siteId/siteLedger" element={<ManagementSiteRentRoll />} /> */}

        <Route path="/sites/:siteId/siteLedger" element={<SiteRentRoll />} />
        <Route
          path="/sites/:siteId/tenantLedger/:unitId"
          element={<TenantLedger />}
        />

<Route path="/sites/:siteId/rentroll" element={<SiteRentActions />} />

   

        <Route path="/employees" element={<ManagementEmployees />} />
        <Route path="/forms/employee" element={<FormEmployee />} />

        <Route exact path="/" element={<SitesDashboard />} />

        {/* <Route path="/Maintenance" element={<Maintenence />} /> */}
        {/* <Route path="/Applicants/new" element={<NewApplicant />} />
        <Route path="/Applicants/:applicantId" element={<ViewApplicant />} /> */}
        {/* <Route
          path="/Applicants/moveIn/:applicantId"
          element={<MoveInApplicant />}
        /> */}
        {/* <Route path="Tenants/:tenantId" element={<TenantUpdate />} /> */}
        {/* <Route
          path="/employees/:employeeId"
          element={<Employee />}
        /> */}
        {/* <Route path="/Management/bills" element={<ManagementBills />} /> */}
        {/* <Route path="/Management" element={<Management />} /> */}

        {/* <Route path="/rents" element={<ManagementRents />} /> */}

        {/* <Route path="/tenants" element={<ManagementTenants />} /> */}


        {/* <Route path="/sites/:siteId/rentroll" element={<SiteRentRoll />} /> */}



        <Route path="/sites/:siteId/addrents" element={<SiteAddRentsDue />} />

        <Route
          path="/sites/:siteId/adddeposit"
          element={<SitePendingDeposit />}
        />

        <Route
          path="/sites/:siteId/addpayments"
          element={<SiteAddPaymentsMade />}
        />
        <Route path="/sites/:siteId/addrents" element={<FormRent />} />
        {/* <Route path="/sites/:siteId/deposits" element={<SiteDeposits />} /> */}

        {/* <Route exact path="/" element={<SitesDashboard />} /> */}
      </Routes>

      <DialogTenant />

      <DialogMoveOut />

      <DialogPayment />

      <DialogEmployee />
    </ThemeProvider>
  );
}
