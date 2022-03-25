import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import { history } from "./helpers";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// import { UnitsGrid } from "./App/Grids/UnitsGrid.jsx";
import { Maintenence } from "./AppSections/Maintenance/Maintenance";
import { Tenants } from "./tenants/Tenants";
import { Rents } from "./rents/Rents";
// import { Management } from "./AppSections/Management/Management";
import { HomePage } from "./AppSections/HomePage.jsx";
import { ManagementSites } from "./management/ManagementSites.jsx";
import { Management } from "./management/Management";
import { SiteUnits } from "./site/SiteUnits.jsx";
import { ManagementRents } from "./management/ManagementRents.jsx";
import { ManagementUnitRents } from "./App/Grids/RentRollSummaryGrid.jsx";
import { SiteRents } from "./site/SiteRents.jsx";
import { ManagementEmployees } from "./management/ManagementEmployees.jsx";
import { Employee } from "./AppSections/Management/Employee";
import { Applicants } from "./applicants/Applicants.jsx";
import { NewApplicant } from "./applicants/NewApplicant.jsx";
import ViewApplicant from "./applicants/ViewAppicant.jsx";
import { MoveInApplicant } from "./applicants/MoveInApplicant.jsx";
import { TenantUpdate } from "./AppSections/Tenants/TenantUpdates"
import { EnterRents } from "./rents/EnterRents.jsx";
import { EnterDeposits } from "./rents/EnterDeposits"
// import {ManagementBills} from "./App/Grids/ManagementBills"

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/Maintenance" element={<Maintenence />} /> */}
        <Route path="/site/:siteId/rents" element={<SiteRents />} />
        <Route path="/site/:siteId/units" element={<SiteUnits />} />
        <Route path="/site/:siteId/enterRents" element={<EnterRents />} />
        {/* <Route path="/Tenants" element={<Tenants />} /> */}
        <Route path="/Applicants" element={<Applicants />} />
        <Route path="/Applicants/new" element={<NewApplicant />} />
        <Route path="/Applicants/:applicantId" element={<ViewApplicant />} />
        <Route path="/Applicants/moveIn/:applicantId" element={<MoveInApplicant />} />


        <Route path="/Tenants" element={<Tenants />} />
        <Route path="Tenants/:tenantId" element={<TenantUpdate />} />



        <Route path="/Rents" element={<Rents />} />
        <Route path="/Rents/enterdeposits" element={<EnterDeposits />} />


        <Route path="/Management/rents" element={<ManagementRents />} />
        <Route path="/Management/sites" element={<ManagementSites />} />
        <Route path="/Management/employees" element={<ManagementEmployees />} />
        <Route path="/Management/employees/:employeeId" element={<Employee />} />
        {/* <Route path="/Management/bills" element={<ManagementBills />} /> */}

        <Route path="/Management" element={<Management />} />
        <Route exact path="/" element={<HomePage />} />

       
        {/* <Route path={routes.management.link} element={<Management />} /> */}
        {/* <Route path={routes.applicants.link} element={<Applicants />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
