import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  applicantListState,
  APPROVED,
  PENDING,
  REJECTED,
  WITHDRAWL,
} from "../../data/applicantAtoms";
import { useCallback, useState } from "react";
import { SiteCheckboxes } from "../../App/Property/SiteCheckboxes";
import { getAllSitesInfo } from "../../data/siteAtoms";

export function Applicant() {
  const [applicantList, setApplicantList] = useRecoilState(applicantListState);
  const sites = useRecoilValue(getAllSitesInfo);
  //const index = applicantList.findIndex((listItem) => listItem === item);
  const [item, setItem] = useState({});

  console.log("item");

  const selectedSites = item.selectedSites || {};
  // const toggleItemStatus = () => {
  //   const newList = replaceItemAtIndex(applicantList, index, {
  //     ...item,
  //     isPending: !item.isPending,
  //   });

  //   setApplicantList(newList);
  // };

  // const deleteItem = () => {
  //   const newList = removeItemAtIndex(applicantList, index);

  //   setApplicantList(newList);
  // };

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
          {...addProps({ name: "name", label: "Name" })}
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
        {/* <FormControl>
          <FormLabel id="gender">Gender</FormLabel>

          <RadioGroup
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
        </FormControl> */}

        <FormControl>
          <FormLabel id="race">Race</FormLabel>

          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "raceLetter", label: "Race" })}
          >
            <FormControlLabel value="1" control={<Radio />} label="White" />
            <FormControlLabel value="2" control={<Radio />} label="Black" />
            <FormControlLabel value="3" control={<Radio />} label="Asian" />
            <FormControlLabel value="4" control={<Radio />} label="LatinX" />
          </RadioGroup>
          {/* 
          1 american indian or alaskan native
          2 asian
          3 black or african american
          4 native hawiian or pacific islander
          5 White

          ethnicity
          a hispanic latino
          b non hispanic latino */}

          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "raceNumber", label: "Race" })}
          >
            <FormControlLabel value="1" control={<Radio />} label="LatinX" />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Non Hispanic or Latino"
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
              <FormControlLabel value="4" control={<Radio />} label="4" />
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
            <FormControlLabel value="veryLow" control={<Radio />} label="VL" />
            <FormControlLabel value="Low" control={<Radio />} label="L" />
            <FormControlLabel value="Median" control={<Radio />} label="M" />
            <FormControlLabel value="High" control={<Radio />} label="H" />
          </RadioGroup>
        </FormControl>
      </Stack>
      {/* <TextField
        {...addProps({ name: "incomeLevel", label: "Income Level" })}
      /> */}

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
          {/* <SiteCheckboxes /> */}
          <FormGroup row>
            {sites.map((item) => (
              <FormControlLabel
                key={item.siteId}
                id="siteList"
                control={
                  <Checkbox
                    {...addCheckProps({
                      name: item.site,
                      // label: {item.site},
                    })}
                    // onChange={handleStateChange}
                  />
                }
                label={item.site}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Stack>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button size="large" variant="contained" onClick={addApplicate}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
