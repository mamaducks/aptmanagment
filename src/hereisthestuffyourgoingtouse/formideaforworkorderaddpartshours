import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getApplicantFormData } from "../state/applicants";
import {
  applicantAccomodationsData,
  applicantEthnicityData,
  applicantGendersData,
  applicantIncomeLevelData,
  applicantRaceData,
  applicantStatusData,
} from "../state/data/applicants";
import { Reference } from "../state/data/reference";
import {
  removeItemAtIndex,
  replaceItemAtIndex,
} from "../state/helpers/dataHelpers";
import { sites } from "../state/sites";

export function FormOccupant({ item, index, onItemChange }) {
  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && onItemChange({ ...item, [name]: value }, index);
    },
    [item, index, onItemChange]
  );

  const addProps = useCallback(
    ({ name, label, type = "text" }) => {
      return {
        label,
        name,
        type,
        onChange: ({ target: { checked, name, value } }) =>
          setFieldValue(name, type === "text" ? value : Boolean(checked)),
        value: item[name],
      };
    },
    [item, setFieldValue]
  );

  return (
    <Box>
      <Stack direction="row">
        <FormControl>
          <FormLabel>First Name</FormLabel>

          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "firstName", label: "First Name" })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Last Name</FormLabel>

          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "lastName" })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Primary</FormLabel>

          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phonePrimary" })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Secondary</FormLabel>

          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phoneSecondary" })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>

          <ToggleButtonGroup
            value={item.gender}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("gender", newValue);
            }}
          >
            {applicantGendersData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>

        <FormControl margin="normal">
          <FormLabel>Race</FormLabel>

          <ToggleButtonGroup
            value={item.race}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("race", newValue);
            }}
          >
            {applicantRaceData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Ethnicity</FormLabel>

          <ToggleButtonGroup
            value={item.ethnicity}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("ethnicity", newValue);
            }}
          >
            {applicantEthnicityData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}

export function FormApplicant() {
  const { applicantId } = useParams();
  const isNew = !applicantId;
  const navigate = useNavigate();
  const allSites = useRecoilValue(sites);

  const [applicantInfo, setApplicantInfo] = useRecoilState(
    getApplicantFormData(applicantId)
  );

  const [item, setItem] = useState(applicantInfo);

  const canSumbit = !!item.applicants?.length && !!item.sitesAppliedFor?.length;

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null && setItem((item) => ({ ...item, [name]: value }));
    },
    [setItem]
  );

  const handleAddOccupant = useCallback(() => {
    setItem((item) => ({
      ...item,
      applicants: [
        ...item.applicants,
        {
          firstName: "First",
          lastName: "Last",
          gender: "m",
          race: applicantRaceData[0].value,
          ethnicity: applicantEthnicityData[0].value,
        },
      ],
    }));
  }, [setItem]);

  const handleUpdateOccupant = useCallback(
    (occupant, index) => {
      setItem((item) => ({
        ...item,
        applicants: replaceItemAtIndex(item.applicants || [], index, occupant),
      }));
    },
    [setItem]
  );

  const handleRemoveOccupant = useCallback(
    (index) => {
      setItem((item) => ({
        ...item,
        applicants: removeItemAtIndex(item.applicants || [], index),
      }));
    },
    [setItem]
  );

  const handleSubmit = useCallback(() => {
    setApplicantInfo(item);

    navigate(-1);
  }, [item, navigate, setApplicantInfo]);

  return (
    <Box>
      <Stack direction="row" gap={4}>
        <FormControl>
          <FormLabel>Date Applied</FormLabel>

          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            value={item.dateApplied}
            onChange={(newValue) => {
              setFieldValue("dateApplied", newValue.getTime());
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Status</FormLabel>

          <ToggleButtonGroup
            value={item.applicantStatus}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("applicantStatus", newValue);
            }}
          >
            {applicantStatusData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack direction="row" gap={4}>
        <FormControl>
          <FormLabel>Family Size</FormLabel>

          <ToggleButtonGroup
            value={item.familySize}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("familySize", newValue);
            }}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <ToggleButton key={value} value={value}>
                {value}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Occupancy</FormLabel>

          <ToggleButtonGroup
            value={item.unitSizes}
            onChange={(_, newValue) => {
              setFieldValue("unitSizes", newValue);
            }}
          >
            {[1, 2, 3].map((value) => (
              <ToggleButton key={value} value={value}>
                {`${value} BR`}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Income Level</FormLabel>

          <ToggleButtonGroup
            value={item.incomeLevel}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("incomeLevel", newValue);
            }}
          >
            {applicantIncomeLevelData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack direction="row" gap={4}>
        <FormControl>
          <FormLabel>Accomodations</FormLabel>

          <ToggleButtonGroup
            value={item.accomodations}
            onChange={(_, newValue) => {
              setFieldValue("accomodations", newValue);
            }}
          >
            {applicantAccomodationsData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Rental Assistance</FormLabel>

          <ToggleButtonGroup
            value={item.rentalAssistance}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("rentalAssistance", newValue);
            }}
          >
            {Reference.yesNoOptions.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack>
        <FormControl>
          <FormLabel>Sites Applying For</FormLabel>

          <ToggleButtonGroup
            value={item.sitesAppliedFor}
            onChange={(_, newValue) => {
              setFieldValue("sitesAppliedFor", newValue);
            }}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
            }}
          >
            {allSites.map(({ siteId, siteName }) => (
              <ToggleButton
                key={siteId}
                value={siteId}
                sx={{
                  borderRadius: "5px !important",
                  borderWidth: "1px !important",
                  margin: "unset !important",
                  borderColor: "gray !important",
                }}
              >
                {siteName}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack>
        <Button size="large" variant="contained" onClick={handleAddOccupant}>
          Add Occupant
        </Button>

        {item.applicants.map((item, index) => (
          <Stack direction="row">
            <Button
              size="large"
              variant="contained"
              onClick={() => handleRemoveOccupant(index)}
            >
              X
            </Button>

            <FormOccupant
              item={item}
              index={index}
              onItemChange={handleUpdateOccupant}
            />
          </Stack>
        ))}
      </Stack>
      <Box display="flex" justifyContent="center" mt={2} gap={3}>
        <Button
          size="large"
          variant="contained"
          onClick={handleSubmit}
          disabled={!canSumbit}
        >
          {isNew ? "Add" : "Update"}
        </Button>

        <Button size="large" variant="contained" href="/applicants">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
