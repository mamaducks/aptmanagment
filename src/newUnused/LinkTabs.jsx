import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { upperFirst } from "lodash";
const SiteTabs = [ "employees"];

function getSelectedTabValue() {
  const path = window.location.pathname.slice(1);

  const index = SiteTabs.findIndex((item) => item.startsWith(path));

  if (index !== -1) {
    return index;
  }

  return SiteTabs.findIndex((item) => item === "sites");
}

export default function NavTabs() {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <Tabs aria-label="nav-tabs" value={getSelectedTabValue()}>
        {SiteTabs.map((tab) => (
          <Tab key={tab} label={upperFirst(tab)} href={`/${tab}`} />
        ))}
      </Tabs>
    </Box>
  );
}
