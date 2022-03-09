import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { uniq } from "lodash";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { getAllSitesInfo } from "../../data/siteAtoms";

export function SiteCheckboxes() {
//   const [site, setSite] = useRecoilState(getAllSitesInfo);
//   const checkList = useRecoilValue(getAllSitesInfo).map((item) => ({
//     id: item.siteId,
//     name: item.name,
//   }));

 

  const [checkedSites, setCheckedSites] = useRecoilState(
    getAllSitesInfo
  );

  const handleStateChange = (event, value) => {
    const name = event.target.name.toLowerCase();

    setCheckedSites(
      value === true
        ? [...checkedSites, name]
        : checkedSites.filter((item) => item !== name)
    );
  };
console.log(getAllSitesInfo, checkedSites, [])
  return (
  

   

<FormGroup row>
    {checkedSites.map((item) => (
<FormControlLabel
        key={item.siteId}
        control={
          <Checkbox
            type="checkbox"
            name={item.site}
            onChange={handleStateChange}
            checked={!setCheckedSites.includes(item.siteId)}
          />
        }
        label={item.site}
      />

    ))}
      
    </FormGroup>
  );
}