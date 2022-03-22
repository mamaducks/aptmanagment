import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { getAllUnitsInfo } from "../../data/unitsAtom";
import { useCallback, useState } from "react";

export function SiteSelect({ onSiteChange, selectedSite, selectedUnit }) {
  const siteList = useRecoilValue(getAllUnitsInfo);
  // const sites = useRecoilValue(getAllSitesInfo)
  const units = (
    siteList.find((item) => item.siteId === selectedSite)?.units || []
  ).filter((unit) => !unit.tenant);

  const handleSiteChange = (event) => {
    onSiteChange(event.target.value, undefined);
  };

  const handleUnitChange = (event) => {
    onSiteChange(selectedSite, event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="siteSelectMenu">Site List</InputLabel>

        <Select value={selectedSite} label="Site" onChange={handleSiteChange}>
          {siteList.map((item) => (
            <MenuItem key={item.site} value={item.siteId}>
              {item.site}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {units.length && (
        <FormControl fullWidth>
          <InputLabel id="siteSelectMenu">Unit List</InputLabel>

          <Select value={selectedUnit} label="Site" onChange={handleUnitChange}>
            {units.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
}
