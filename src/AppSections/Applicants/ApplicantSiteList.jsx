import { MenuItem, OutlinedInput, Select } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import {  getAllSitesInfo } from "../../data/siteAtoms";

export function SortSelect() {
  const [sortType, setSortType] = useRecoilState(getAllSitesInfo);
const sites = useRecoilValue(getAllSitesInfo)
  

  return (
    <Select
      variant="outlined"
      onChange={(e, b) => {
        setSortType(e.target.value);
      }}
      value={sortType}
      input={
        <OutlinedInput
          sx={{
            borderRadius: "5px",
            mr: 1,
            mt: 3
          }}
        />
      }
    >
      {sites.map((item, index) => (
        <MenuItem key={index} value={item.site}>
          {item.site[2]}
        </MenuItem>
      ))}
    </Select>
  );
}