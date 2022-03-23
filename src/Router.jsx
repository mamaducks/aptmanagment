import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import { history } from "./helpers";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { UnitsGrid } from "./App/Grids/UnitsGrid.jsx";
import { SiteRents } from "./AppSections/site/SiteRents.jsx";
import { Maintenence } from "./AppSections/Maintenance/Maintenance";
import { Tenants } from "./AppSections/Tenants/Tenants";
import { Rents } from "./AppSections/Rents/Rents";
import { Applicants } from "./AppSections/Applicants/Applicants";
import { Management } from "./AppSections/Management/Management";
import { HomePage } from "./AppSections/HomePage.jsx";

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/Maintenance" element={<Maintenence />} />
        <Route path="/site/:siteId/rents" element={<SiteRents />} />
        <Route path="/site/:siteId/units" element={<UnitsGrid />} />
        <Route path= "/Tenants" element={<Tenants />} />
        <Route path="/Applicants" element={<Applicants />} />
        <Route path="/Rents" element={<Rents />} />
        <Route path="/Management" element={<Management />} />
        <Route exact path="/" element={<HomePage />} />

        {/* <Route path={routes.maintenance.link} element={<Maintenence />} /> */}
        {/* <Route path={routes.tenants.link} element={<Tenants />} /> */}
        {/* <Route path={routes.rents.link} element={<Rents />} /> */}

        {/* <Route path={routes.management.link} element={<Management />} /> */}
        {/* <Route path={routes.applicants.link} element={<Applicants />} /> */}
        
      </Routes>
    </ThemeProvider>
  );
}
