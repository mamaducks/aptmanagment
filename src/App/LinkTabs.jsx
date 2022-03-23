import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import routes from "../routes";
import { useState } from "react";

function LinkTab(props) {
  return <Tab component="a" {...props} />;
}

export default function NavTabs() {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <Tabs aria-label="nav-tabs">
        <LinkTab label="Maintenance" href="/Maintenance" />
        <LinkTab label="Rents" href="/Rents" />
        <LinkTab label="Applicants" href="/Applicants" />
        <LinkTab label="Tenants" href="/Tenants" />
        <LinkTab label="Management" href="/Management" />
        {/* {/* <Tabs
        value={window.location.pathname}
        onChange={handleChange}
        aria-label="nav tabs example"
        sx={{ alignItems: "center" }}
      > 
        {/* {siteSections.map((item, index) => ( 
        {Object.values(routes).map(({ link, label, index }) => (
          <Tab
            label={label}
            href={link}
            key={link}
            component="a"
            value={link}
          />
        ))} */}
      </Tabs>
    </Box>
  );
}
