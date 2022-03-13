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
    <div className={classes.root}>
      <div className={classes.locationBox}>
        <TextField
          label="Location"
          name="location"
          placeholder="Search city, state, zip"
          onChange={handleChange}
          value={location}
          className={classes.location}
        />
      </div>
      <div className={classes.searchBar}>
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


export const ALL_SORT_VALUES = [
  ["launchDate", true, "Launch Date Newest to Oldest"],
  ["launchDate", false, " Launch Date Oldest to Newest"],
  ["title", true, "Title A-Z"],
  ["title", false, "Title Z-A"],
];

import { MenuItem, OutlinedInput, Select } from "@mui/material";
import { useRecoilState } from "recoil";
import { ALL_SORT_VALUES, sortedTelescopesState } from "../data/telescope";




export function SortSelect() {
  const [sortType, setSortType] = useRecoilState(sortedTelescopesState);


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
      {ALL_SORT_VALUES.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item[2]}
        </MenuItem>
      ))}
    </Select>
  );
}

filtering


export const ACTIVE = "active";
export const INACTIVE = "past";
export const FUTURE = "planned";

export const FLYBY = "flyby";
export const ORBITAL = "orbital";
export const OBSERVE = "observatory";
export const LANDER = "lander";
export const ROVER = "rover";
export const OTHER = "other";

export const ALL_STATES = [ACTIVE, INACTIVE, FUTURE];
export const ALL_TYPES = [FLYBY, ORBITAL, OBSERVE, ROVER];


export const filteredTelescopesStates = atom({
  key: "filteredTelescopesStates",
  default: ALL_STATES,
});

export const filteredTelescopesTypes = atom({
  key: "filteredTelescopesTypes",
  default: ALL_TYPES,
});

export const sortedTelescopesState = atom({
  key: "sortedTelescopesState",
  default: ALL_SORT_VALUES[0],
});


import { Box, Button, FormGroup } from "@mui/material";
import { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Header } from "../Styles/Header";
import { useRecoilState } from "recoil";
import {
  ACTIVE,
  ALL_STATES,
  ALL_TYPES,
  filteredTelescopesStates,
  filteredTelescopesTypes,
  FUTURE,
  INACTIVE,
} from "../data/telescope";
import { FormCheckboxes } from "./FormCheckboxes";
import { FormHeader } from "./FormHeader";
export function StatusCheckboxesData() {
  const [checkedStates, setCheckedStates] = useRecoilState(
    filteredTelescopesStates
  );

  const [checkedTypes, setCheckedTypes] = useRecoilState(
    filteredTelescopesTypes
  );

  const handleStateChange = (event, value) => {
    const name = event.target.name.toLowerCase();

    setCheckedStates(
      value === true
        ? [...checkedStates, name]
        : checkedStates.filter((item) => item !== name)
    );
  };

  const handleSelectAll = () => {
    setCheckedStates(ALL_STATES);
    setCheckedTypes(ALL_TYPES);
  };

  const allSelected =
    checkedStates.length === ALL_STATES.length &&
    checkedTypes.length === ALL_TYPES.length;

  useEffect(() => {
    if (checkedStates.length === 0) {
      setCheckedStates([ACTIVE]);
    }
  }, [checkedStates, setCheckedStates]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ height: 45, width: 255 }}
      >
        <Header title="Filter Missions" />

        {!allSelected && (
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            sx={{ py: 1 }}
            onClick={handleSelectAll}
          >
            All
          </Button>
        )}
      </Box>

      <FormHeader title="Status:">
        <FormGroup row="true">
          {[
            [ACTIVE, "Active"],
            [INACTIVE, "Inactive"],
            [FUTURE, "Planned"],
          ].map(([name, label]) => (
            <FormCheckboxes
              name={name}
              onChange={handleStateChange}
              checked={checkedStates.includes(name)}
              label={label}
            />
          ))}
        </FormGroup>
      </FormHeader>
    </>
  );
}