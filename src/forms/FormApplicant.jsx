import DateTimePicker from "@mui/lab/DateTimePicker";
import {
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
import { Delete, Check } from "@mui/icons-material";
import { EMPTY_APPLICANT } from "../state/applicants";

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
    <Stack direction="column" gap={4}>
      <Stack>
        <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>First Name</FormLabel>

          <TextField
            autoFocus={index === 0}
            {...addProps({ name: "firstName" })}
          />
        </FormControl>

        <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>Last Name</FormLabel>

          <TextField {...addProps({ name: "lastName" })} />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Primary</FormLabel>

          <TextField {...addProps({ name: "phonePrimary" })} />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Secondary</FormLabel>

          <TextField {...addProps({ name: "phoneSecondary" })} />
        </FormControl>
      </Stack>

      <Stack>
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

        <FormControl>
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
    </Stack>
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
          ...EMPTY_APPLICANT,
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
    <Stack direction="column" m={10}>
      <Stack>
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

        <FormControl sx={{ alignSelf: "center", mr: 3 }}>
          <FormLabel>Application Status</FormLabel>

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

      <Stack direction="column">
        {item.applicants.map((item, index) => (
          <Stack
            key={index}
            direction="column"
            p={5}
            borderRadius={2}
            border="solid 1px #e2e2e2"
          >
            <Stack justifyContent="flex-start" alignItems="center" gap={0}>
              <IconButton
                disabled={!canRemoveCoApplicant}
                color="warning"
                onClick={() => handleRemoveOccupant(index)}
              >
                <Delete />
              </IconButton>

              <Typography variant="h6" mr={2}>
                Applicant {index + 1}
              </Typography>

              {!index && (
                <Button variant="outlined" onClick={handleAddOccupant}>
                  Add Co-Applicant
                </Button>
              )}
            </Stack>

            <FormOccupant
              item={item}
              index={index}
              onItemChange={handleUpdateOccupant}
            />
          </Stack>
        ))}
      </Stack>

      <Stack>
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
              <ToggleButton key={value} value={value} sx={{ width: 70 }}>
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
              <ToggleButton key={value} value={value} sx={{ width: 70 }}>
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
              <ToggleButton key={value} value={value} sx={{ width: 70 }}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack direction="column">
        <FormControl>
          <FormLabel>Choose Sites Applying For</FormLabel>

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
                <Stack gap={3}>
                  {item.sitesAppliedFor?.includes(siteId) && <Check />}{" "}
                  <Typography>{siteName}</Typography>
                </Stack>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <Stack direction="column">
        <FormControl>
          <FormLabel>Notes</FormLabel>

          <TextField
            onChange={({ target: { value } }) => setFieldValue("notes", value)}
            multiline
            rows={3}
            variant="outlined"
            value={item.notes}
          />
        </FormControl>
      </Stack>

      <Stack justifyContent="center">
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!canSumbit}
        >
          {isNew ? "Add" : "Update"}
        </Button>

        <Button href="/applicants">Cancel</Button>
      </Stack>
    </Stack>
  );
}
