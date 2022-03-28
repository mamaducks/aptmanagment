import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
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
import { Delete } from "@mui/icons-material";
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
    <Box alignSelf="center">
      <Stack direction="row" gap={5}>
        <FormControl margin="dense" sx={{ width: 680 }}>
          <FormLabel>First Name</FormLabel>

          <TextField fullWidth {...addProps({ name: "firstName" })} />
        </FormControl>

        <FormControl margin="dense" sx={{ width: 680 }}>
          <FormLabel>Last Name</FormLabel>

          <TextField
            fullWidth
            margin="none"
            {...addProps({ name: "lastName" })}
          />
        </FormControl>
      </Stack>

      <Stack direction="row" gap={5} mt={2}>
        <FormControl margin="dense" sx={{ width: 500 }}>
          <FormLabel>Phone Primary</FormLabel>

          <TextField
            fullWidth
            margin="none"
            {...addProps({ name: "phonePrimary" })}
          />
        </FormControl>

        <FormControl margin="dense" sx={{ width: 500 }}>
          <FormLabel>Phone Secondary</FormLabel>

          <TextField
            fullWidth
            margin="none"
            {...addProps({ name: "phoneSecondary" })}
          />
        </FormControl>

        <FormControl margin="dense" sx={{ ml: 5, mt: 1, alignSelf: "center" }}>
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
      </Stack>

      <Stack direction="row" gap={4}>
        <FormControl margin="dense">
          <FormLabel>Race</FormLabel>

          <ToggleButtonGroup
            value={item.race}
            exclusive
            onChange={(_, newValue) => {
              setFieldValue("race", newValue);
            }}
            sx={{ flexWrap: "wrap" }}
          >
            {applicantRaceData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>

        <FormControl margin="dense" sx={{ ml: 5 }}>
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

  const canRemoveCoApplicant = item.applicants?.length >= 2;
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
          firstName: "",
          lastName: "",
          gender: applicantGendersData[0].value,
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
      <Stack sx={{ m: 4 }}>
        <Stack direction="row" justifyContent="space-around">
          <FormControl margin="dense" fullWidth sx={{ width: "700px" }}>
            <FormLabel>Date Applied</FormLabel>

            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={item.dateApplied}
              onChange={(newValue) => {
                setFieldValue("dateApplied", newValue.getTime());
              }}
            />
          </FormControl>

          <FormControl sx={{ alignSelf: "center", mr: 3 }}>
            <FormLabel>Status</FormLabel>

            <ToggleButtonGroup
              value={item.applicantStatus}
              exclusive
              onChange={(_, newValue) => {
                setFieldValue("applicantStatus", newValue);
              }}
              size="large"
            >
              {applicantStatusData.map(({ value, label }) => (
                <ToggleButton key={value} value={value}>
                  {label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FormControl>
        </Stack>
      </Stack>

      <Stack gap={8}>
        {item.applicants.map((item, index) => (
          <Stack>
            <Stack direction="row" alignItems="center" ml={30}>
              <IconButton
                variant="text"
                color="primary"
                disabled={!canRemoveCoApplicant}
                onClick={() => handleRemoveOccupant(index)}
              >
                <Delete />
              </IconButton>

              <Typography variant="h6" mr={3}>
                Applicant {index + 1}
              </Typography>

              {!index && <Button variant="outlined" onClick={handleAddOccupant}>
                Add Co-Applicant
              </Button>}
            </Stack>

            <FormOccupant
              item={item}
              index={index}
              onItemChange={handleUpdateOccupant}
            />
          </Stack>
        ))}
      </Stack>

      <Stack direction="row" p={3} ml={5}>
        <Stack flex="1 2" px={3}>
          <Stack direction="row" gap={15}>
            <FormControl margin="dense">
              <FormLabel>Family Size</FormLabel>

              <ToggleButtonGroup
                value={item.familySize}
                exclusive
                onChange={(_, newValue) => {
                  setFieldValue("familySize", newValue);
                }}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <ToggleButton key={value} value={value} sx={{ width: 70 }}>
                    {value}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </FormControl>

            <FormControl margin="dense">
              <FormLabel>Occupancy</FormLabel>

              <ToggleButtonGroup
                value={item.unitSizes}
                onChange={(_, newValue) => {
                  setFieldValue("unitSizes", newValue);
                }}
              >
                {[1, 2, 3].map((value) => (
                  <ToggleButton key={value} value={value} sx={{ width: 70 }}>
                    {`${value} BR`}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </FormControl>
          </Stack>

          <Stack direction="row" gap={32}>
            <FormControl margin="dense">
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

            <FormControl margin="dense">
              <FormLabel>Rental Assistance</FormLabel>

              <ToggleButtonGroup
                value={item.rentalAssistance}
                exclusive
                onChange={(_, newValue) => {
                  setFieldValue("rentalAssistance", newValue);
                }}
              >
                {Reference.yesNoOptions.map(({ value, label }) => (
                  <ToggleButton key={value} value={value} sx={{ width: 70 }}>
                    {label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </FormControl>
          </Stack>

          <Stack direction="row">
            <FormControl margin="dense">
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
          </Stack>
        </Stack>

        <Box flexGrow={1} mx={4}>
          <FormControl fullWidth margin="dense">
            <FormLabel>Notes</FormLabel>

            <TextField
              onChange={({ target: { value } }) =>
                setFieldValue("notes", value)
              }
              multiline
              rows={8}
              variant="outlined"
            />
          </FormControl>
        </Box>
      </Stack>

      <Stack p={2}>
        <FormControl>
          <FormLabel sx={{ fontSize: "larger", mb: 2, textAlign: "center" }}>
            Choose Sites Applying For
          </FormLabel>

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
