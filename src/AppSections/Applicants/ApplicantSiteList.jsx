import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { getAllSitesInfo } from "../../data/siteAtoms";
import { useCallback, useState } from "react";

export function SiteSelect() {
  const [siteList, setSiteList] = useRecoilState(getAllSitesInfo);
  // const sites = useRecoilValue(getAllSitesInfo)

  const [item, setItem] = useState({ selectedSites: {} });

  // const selectedSites = item.selectedSites || {};

  const handleChange = (event) => {
    setSiteList(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="siteSelectMenu">Site List</InputLabel>
      <Select
        labelId="site-select"
        id="siteSelect"
        value={item.siteId}
        label="Site"
        onChange={handleChange}
      >
        {siteList.map((item) => (
          <MenuItem key={item.site} value={item.site}>{item.site}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
