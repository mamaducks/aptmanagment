import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import routes from "../routes";

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={window.location.pathname}
        onChange={handleChange}
        aria-label="nav tabs example"
      >
        {/* {siteSections.map((item, index) => ( */}
        {Object.values(routes).map(({ link, label, index }) => (
          <Tab
            label={label}
            href={link}
            key={link}
            component="a"
            value={link}
          />
        ))}
      </Tabs>
    </Box>
  );
}
