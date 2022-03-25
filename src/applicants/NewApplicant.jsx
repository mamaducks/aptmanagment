import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  applicantListState,
  APPROVED,
  PENDING,
  REJECTED,
  WITHDRAWL,
} from "../data/applicantAtoms";
import { useCallback, useState } from "react";
import { getAllSitesInfo } from "../data/siteAtoms";

export function NewApplicant() {
  const [applicantList, setApplicantList] = useRecoilState(applicantListState);
  const sites = useRecoilValue(getAllSitesInfo);
  const [item, setItem] = useState({});

  console.log("item");

  const selectedSites = item.selectedSites || {};

  const addProps = useCallback(
    ({ name, label, type = "text" }) => {
      const setFieldValue = ({ target: { name, value } }) =>
        setItem((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: item[name],
      };
    },
    [item]
  );

  const addCheckProps = useCallback(
    ({ name, label, type = "checkbox" }) => {
      const setFieldValue = ({ target: { name, checked } }) =>
        setItem((item) => ({
          ...item,
          selectedSites: { ...item.selectedSites, [name]: checked },
        }));

      return {
        label,
        name,
        type,
        checked: !!selectedSites[name],
        onChange: setFieldValue,
        value: item[name],
      };
    },
    [item, selectedSites]
  );

  const addApplicate = useCallback(() => {
    setApplicantList((applicants) => [...applicants, item]);
  }, [item, setApplicantList]);

  return (
    <Box sx={{ p: "30px" }}>
      <Stack direction="row" gap={4}>
        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            {...addProps({ name: "dateApplied", label: "Date Applied" })}
          />
        </Box>

        <FormControl>
          <FormLabel id="status">Approval Status</FormLabel>
          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "status", label: "Status" })}
          >
            <FormControlLabel
              value={PENDING}
              control={<Radio />}
              label="Pending"
            />
            <FormControlLabel
              value={APPROVED}
              control={<Radio />}
              label="Approved"
            />
            <FormControlLabel
              value={WITHDRAWL}
              control={<Radio />}
              label="Withdrawn"
            />
            <FormControlLabel
              value={REJECTED}
              control={<Radio />}
              label="Rejected"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack direction="row"></Stack>
      <Box sx={{ width: "850px" }}>
        <TextField
          fullWidth
          margin="normal"
          {...addProps({ name: "firstName", label: "First Name" })}
        />
      </Box>
      <Box sx={{ width: "850px" }}>
        <TextField
          fullWidth
          margin="normal"
          {...addProps({ name: "lastName", label: "Last Name" })}
        />
      </Box>
      <Stack direction="row" gap={4}>
        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phone", label: "Phone", type: "number" })}
          />
        </Box>
        <FormControl margin="normal">
          <FormLabel id="gender">Gender</FormLabel>

          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "gender", label: "Gender" })}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Box display="flex" gap={7}>
        <FormControl>
          <FormLabel id="race">Race</FormLabel>

          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "raceLetter", label: "Race" })}
          >
            <FormControlLabel value="1" control={<Radio />} label="American Indian or Alaskan Native" />
            <FormControlLabel value="2" control={<Radio />} label="Asian" />
            <FormControlLabel value="3" control={<Radio />} label="Black or African American" />
            <FormControlLabel value="4" control={<Radio />} label="Native Hawiian or Pacific Islander" />
            <FormControlLabel value="4" control={<Radio />} label="White" />

          </RadioGroup>
    

          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "raceNumber", label: "Race" })}
          >
            <FormControlLabel value="A" control={<Radio />} label="Hispanic Latino" />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="Non Hispanic Latino"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Stack sx={{ border: "1px solid black", p: 1 }}>
        <Stack direction="row" gap={7}>
          <FormControl margin="dense">
            <FormLabel id="familySize">Family Size</FormLabel>
            <RadioGroup
              row
              defaultValue=""
              {...addProps({ name: "familySize", label: "Family Size" })}
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
            </RadioGroup>
          </FormControl>

          <FormControl margin="dense">
            <FormLabel id="occupancy">Occupancy</FormLabel>

            <RadioGroup
              row
              defaultValue=""
              {...addProps({ name: "beds", label: "Beds" })}
            >
              <FormControlLabel value="1" control={<Radio />} label="1 bed" />
              <FormControlLabel value="2" control={<Radio />} label="2 bed" />
            </RadioGroup>
          </FormControl>
        </Stack>

        <FormControl margin="dense">
          <FormLabel id="familySize">Income Level</FormLabel>
          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "incomeLevel", label: "Family Size" })}
          >
            <FormControlLabel value="VL" control={<Radio />} label="veryLow" />
            <FormControlLabel value="L" control={<Radio />} label="Low" />
            <FormControlLabel value="M" control={<Radio />} label="Medium" />
            <FormControlLabel value="H" control={<Radio />} label="High" />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack sx={{ border: "1px solid black", p: 1 }}>
        <FormControl>
          <FormLabel id="prefer">Preferences</FormLabel>
          <FormGroup row {...addProps({ name: "stories" })}>
            <FormControlLabel
              id="2floor"
              control={<Checkbox />}
              {...addProps({ name: "secondFloor", label: "Second Floor" })}
            />
            <FormControlLabel
              id="1floor"
              control={<Checkbox />}
              {...addProps({ name: "firstFloor", label: "First Floor" })}
            />
          </FormGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="accomodate">Accomodations</FormLabel>
          <FormGroup row>
            <FormControlLabel
              id="rentalAssistance"
              control={<Checkbox />}
              {...addProps({
                name: "rentalAssistance",
                label: "Rental Assistance",
              })}
            />
            <FormControlLabel
              id="handicap"
              control={<Checkbox />}
              {...addProps({ name: "handicapped", label: "Handicapped" })}
            />
          </FormGroup>
        </FormControl>
      </Stack>
      <Stack sx={{ border: "1px solid black", p: 1 }}>
        <FormControl>
          <FormLabel id="sites">Sites Applying For</FormLabel>
          <FormGroup row>
            {sites.map((item) => (
              <FormControlLabel
                key={item.siteId}
                id="siteList"
                control={
                  <Checkbox
                    {...addCheckProps({
                      name: item.site,
                    })}
                  />
                }
                label={item.site}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Stack>
      <Box display="flex" justifyContent="center" mt={2} gap={3}>
        <Button size="large" variant="contained" onClick={addApplicate}>
          Add
        </Button>
        <Button size="large" variant="contained" href="/Applicants"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
