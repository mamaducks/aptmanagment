import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GridFilterInputSingleSelect, gridSortingStateSelector } from "@mui/x-data-grid";

import React from "react";
import {
  bathOptions,
  bedOptions,
  maxPriceOptions,
  minPriceOptions,
} from "../../hooks";
import { SelectInput } from "../../NewComponents/SelectInput";


const getOptions = (amount) =>
  new Array(amount).fill(undefined).map((_, index) => index + 1);

const baseOptions = getOptions(6);

const optionMapper = (value) => ({ label: value, value });
const priceOptionMapper = (value) => ({
  label: !!value ? Number(value).toLocaleString() : "",
  value,
});

export const bedOptions = baseOptions.map(optionMapper);

export const minPriceOptions = getOptions(20)
  .map((val) => val * 10000)
  .map(priceOptionMapper);

export const maxPriceOptions = getOptions(20)
  .map((val) => val * 100000)
  .map(priceOptionMapper);



const useStyles = makeStyles((theme) => ({
  root: {
    "& > div": {
      margin: "5px",
      "& :nth-child(n+2)": {
        textAlign: "right",
      },
    },
    width: 840,
  },
  locationBox: {
    display: "flex",
    justifyContent: "center",
  },
  location: {
    "& > div": {
      width: 450,
    },
  },
  minMax: {
    width: 200,
  },
  bedBath: {
    width: 85,
  },
  searchBar: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export function SearchFilter({ filter, setFilter }) {
  const classes = useStyles();
  const { minPrice, maxPrice, beds, baths, location = "" } = filter;
  const handleChange = (event) =>
    setFilter((existingFilter) => ({
      ...existingFilter,
      [event.target.name]: event.target.value,
    }));

  return (
    <div >
      <div >
        <TextField
          label="Location"
          name="location"
          placeholder="Search city, state, zip"
          onChange={handleChange}
          value={location}
          className={classes.location}
        />
      </div>


      <div >
        <SelectInput
          label="Min Price"
          name="minPrice"
          options={minPriceOptions}
          onChange={handleChange}
          value={minPrice}
          className={classes.minMax}
        />

        <SelectInput
          label="Max Price"
          name="maxPrice"
          options={maxPriceOptions}
          onChange={handleChange}
          value={maxPrice}
          className={classes.minMax}
        />
        <SelectInput
          label="Bedrooms"
          name="beds"
          options={bedOptions}
          onChange={handleChange}
          value={beds}
          className={classes.bedBath}
        />

        <SelectInput
          label="Bathrooms"
          name="baths"
          options={bathOptions}
          onChange={handleChange}
          value={baths}
          className={classes.bedBath}
        />
      </div>
    </div>
  );


  import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { bathOptions } from "../../../hooks";
import {
  SelectInput,
  SelectButtonColorInput,
} from "../../../NewComponents/SelectInput";

const useStyles = makeStyles((theme) => ({
  bedBath: {
    width: 85,
  },
  searchBar: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export const FilterButtonList = ({
  label,
  name,
  filter,
  options,
  setFilter,
}) => {
  const classes = useStyles();
  const currentValue = filter[name];

  const handleChange = (newValue) =>
    setFilter((existingFilter) => ({
      ...existingFilter,
      [name]: newValue,
    }));

  return (
    <div className={classes.searchBar}>
      <SelectButtonColorInput
        label={label}
        name={name}
        options={options}
        onChange={handleChange}
        value={currentValue}
        className={classes.bedBath}
      />
    </div>
  );
};

import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { bedOptions } from "../../../hooks";
import { SelectInput } from "../../../NewComponents/SelectInput";

const useStyles = makeStyles((theme) => ({
  bedBath: {
    width: 85,
  },
  searchBar: {
    display: "flex",
    justifyContent: "space-around",
    paddingRight: 10
  },
}));

export const Bed = ({ filter, setFilter }) => {
  const classes = useStyles();
  const { beds = "" } = filter;
  const handleChange = (event) =>
    setFilter((existingFilter) => ({
      ...existingFilter,
      [event.target.name]: event.target.value,
    }));
  return (
    <div className={classes.searchBar}>
      <SelectInput
        label="Bedrooms"
        name="beds"
        options={bedOptions}
        onChange={handleChange}
        value={beds}
        className={classes.bedBath}
      />
    </div>
  );
};

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  ButtonGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function SelectInput({ label, ...props }) {
  return (
    <FormControl>
         <FormControlLabel
          control={ <Select labelId={label} {...props}>
          <MenuItem value={""}>Any</MenuItem>
  
          {props.options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>}
          label={label}
          labelPlacement="start"
        />
     

      {/* <Select labelId={label} {...props}>
        <MenuItem value={""}>Any</MenuItem>

        {props.options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select> */}
    </FormControl>
  );
}


sorting

export const ALL_STATUS = [ PENDING, APPROVED, REJECTED, WITHDRAWL ];


export const PENDING = "Pending";
export const APPROVED = "Approved";
export const REJECTED = "Rejected";
export const WITHDRAWL = "Withdrawl";

export const filteredStatusTypes = atom({
  key: "filteredStatusTypes",
  default: ALL_STATUS,
});




export const ALL_SORT_VALUES = [
  ["dateApplied", true, " Date Applied Newest to Oldest"],
  ["dateApplied", false, " Date Applied Oldest to Newest"],
  // ["title", true, "Title A-Z"],
  // ["title", false, "Title Z-A"],
];

import { MenuItem, OutlinedInput, Select } from "@mui/material";
import { useRecoilState } from "recoil";
import { ALL_SORT_VALUES, sortedApplicantState } from "../data/applicantAtoms";




export function SortSelect() {
  const [sortType, setSortType] = useRecoilState(filteredStatusTypes);


  return (
    <FormGroup
      onChange={(e, b) => {
        setSortType(e.target.value);
      }}
      value={sortType}
      control={[{ALL_STATUS.map((item, index) => (
        <Checkbox
        type="checkbox"
        name={item}
        checked={sortType.includes(item)}
        />)
      }]}
      />


       
//       {ALL_STATUS.map((item, index) => (
//         <MenuItem key={index} value={item}>
//           {item[2]}
//         </MenuItem> 
        
//         <Checkbox
//   type="checkbox"
//   name={item}
//   onChange={(e, b) => {
//     setSortType(e.target.value);
//   }}
//   checked={checkedTypes.includes(item)}
// />








<FormGroup row="true">
{[
  [ADMIN, "Admin"],
  [MAINTENANCE, "Maintenance"],
  [SITEMANAGER, "Site Manager"],
  [MAINTENANCESUPER, "Maintenance Supervisor"],
  [OFFICE, "Office"],
].map(([name, label]) => (

  <FormControlLabel
  key={name}
  control={
    <Checkbox
      type="checkbox"
      name={name}
      onChange={handleTypeChange}
      checked={checkedTypes.includes(name)}
    />
  }
  label={label}
/>
))}
</FormGroup>
  );
}

filtering

export const sortedApplicantState = atom({
  key: "sortedApplicantState",
  default: ALL_SORT_VALUES[0],
});



// export const ACTIVE = "active";
// export const INACTIVE = "past";
// export const FUTURE = "planned";

// export const FLYBY = "flyby";
// export const ORBITAL = "orbital";
// export const OBSERVE = "observatory";
// export const LANDER = "lander";
// export const ROVER = "rover";
// export const OTHER = "other";

export const ALL_TYPES = [MAINTENANCE, SITEMANAGER, MAINTENANCESUPER, OFFICE, ADMIN ];


// export const ALL_TYPES = [FLYBY, ORBITAL, OBSERVE, ROVER];

export const MAINTENANCE = "maintenance";
export const SITEMANAGER = "site manager";
export const MAINTENANCESUPER = "maintenance supervisor";
export const OFFICE = "office manager";
export const ADMIN = "admin";

export const filteredEmploymentTypes = atom({
  key: "filteredEmploymentTypes",
  default: ALL_TYPES,
});






export const filteredTelescopesStates = atom({
  key: "filteredTelescopesStates",
  default: ALL_STATES,
});

export const filteredTelescopesTypes = atom({
  key: "filteredTelescopesTypes",
  default: ALL_TYPES,
});

// export const sortedTelescopesState = atom({
//   key: "sortedTelescopesState",
//   default: ALL_SORT_VALUES[0],
// });




import { Box, Button, FormGroup } from "@mui/material";
import { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Header } from "../Styles/Header";
import { useRecoilState } from "recoil";
import {
  MAINTENANCE,
  SITEMANAGER,
  MAINTENANCESUPER,
  OFFICE,
  ADMIN,
  filteredEmploymentTypes,
  ALL_TYPES,

  // ACTIVE,
  // ALL_STATES,
  // ALL_TYPES,
  // filteredTelescopesStates,
  // filteredTelescopesTypes,
  // FUTURE,
  // INACTIVE,
} from "../data/applicantAtoms";
// import { FormCheckboxes } from "./FormCheckboxes";
// import { FormHeader } from "./FormHeader";

export function EmployeeTypeCheckboxesData() {
  const [checkedTypes, setCheckedTypes] = useRecoilState(
    filteredEmploymentTypes
  );

  // const [checkedTypes, setCheckedTypes] = useRecoilState(
  //   filteredTelescopesTypes
  // );

  const handleTypeChange = (event, value) => {
    const name = event.target.name.toLowerCase();

    setCheckedTypes(
      value === true
        ? [...checkedTypes, name]
        : checkedTypes.filter((item) => item !== name)
    );
  };

  // const handleSelectAll = () => {
  //   // setCheckedStates(ALL_STATES);
  //   setCheckedTypes(ALL_TYPES);
  // };

  // const allSelected =
  //   // checkedStates.length === ALL_STATES.length &&
  //   checkedTypes.length === ALL_TYPES.length;

  useEffect(() => {
    if (checkedTypes.length === 0) {
      setCheckedTypes([ADMIN]);
    }
  }, [checkedTypes, setCheckedTypes]);

  return (
    <>
      

        <FormGroup row="true">
          {[
            [ADMIN, "Admin"],
            [MAINTENANCE, "Maintenance"],
            [SITEMANAGER, "Site Manager"],
            [MAINTENANCESUPER, "Maintenance Supervisor"],
            [OFFICE, "Office"],
          ].map(([name, label]) => (

            <FormControlLabel
            key={name}
            control={
              <Checkbox
                type="checkbox"
                name={name}
                onChange={handleTypeChange}
                checked={checkedTypes.includes(name)}
              />
            }
            label={label}
          />
          ))}
        </FormGroup>
    </>
  );
}
