import React from "react";
import {
  BrowserRouter,
  Route,
  Router as ReactRouter,
  Switch,
} from "react-router-dom";
import routes from "./routes.js";
import { history } from "./helpers";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";


import { Maintenence } from "./AppSections/Maintenance/Maintenance";
import { Tenants } from "./AppSections/Tenants/Tenants";
import { Rents } from "./AppSections/Rents/Rents";
import { Applicants } from "./AppSections/Applicants/Applicants";
import { Management } from "./AppSections/Management/Management";
import { HomePage } from "./AppSections/HomePage.jsx";

export function Router() {
  return (
    <ReactRouter history={history}>
     
      <BrowserRouter>
       <ThemeProvider theme={theme}>
        <Switch>
          <Route path={routes.maintenance.link} component={Maintenence} />
          <Route path={routes.tenants.link} component={Tenants} />
          <Route path={routes.rents.link} component={Rents} />
          <Route path={routes.management.link} component={Management} />
          <Route path={routes.applicants.link} component={Applicants} />
          <Route exact path="/" component={HomePage} />
        </Switch>
       </ThemeProvider> 
      </BrowserRouter>
      
    </ReactRouter>
  );
}
