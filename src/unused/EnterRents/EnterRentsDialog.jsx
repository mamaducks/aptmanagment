import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from "react";
import NewDepositList from '../Deposits/EnterDepositList';
import EnterRentList from './EnterRentList';
import {Rent} from './RentSheet'
// import EnterRentsList from './EditableRentList';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import { useRecoilState, useRecoilValue } from "recoil";
import { getAllUnitsInfo } from "../../data/unitsAtom";

export default function EnterRentsDialog({ onSiteChange, selectedSite, selectedUnit }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const siteList = useRecoilValue(getAllUnitsInfo);

  const handleSiteChange = (event) => {
    onSiteChange(event.target.value, undefined);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
       Enter Rents
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Enter Rents</DialogTitle>
        <DialogContentText>
        <FormControl >
        <InputLabel id="siteSelectMenu">Site List</InputLabel>

        <Select value={selectedSite} label="Site" onChange={handleSiteChange}>
          {siteList.map((item) => (
            <MenuItem key={item.site} value={item.siteId}>
              {item.site}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            <div>Site Name</div>
            <div>Month</div>
            <div>unit #</div>
            <div>tenant name</div>
            </DialogContentText>
        <DialogContent>
        {/* <Rent /> */}
        <EnterRentList />
       < NewDepositList />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}