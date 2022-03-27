import { Reference } from "./reference";
import { sitesWithUnitsData } from "./sitesWithUnits";

export const applicantGendersData = [
  { value: "m", label: "Male" },
  { value: "f", label: "Female" },
];

export const applicantRaceData = [
  { value: "1", label: "American Indian or Alaskan Native" },
  { value: "2", label: "Asian" },
  { value: "3", label: "Black or African American" },
  {
    value: "4",
    label: "Native Hawiian or Pacific Islander",
  },
  { value: "5", label: "White" },
];

export const applicantEthnicityData = [
  { value: "a", label: "Hispanic Latino" },
  { value: "b", label: "Non-Hispanic Latino" },
];

export const applicantStatusData = [
  { value: "a", label: "Applied" },
  { value: "p", label: "Placed" },
  { value: "r", label: "Rejected" },
  { value: "w", label: "Withdrawn" },
];

export const applicantIncomeLevelData = [
  { value: "l", label: "Low" },
  { value: "vl", label: "Very Low" },
  { value: "m", label: "Medium" },
  { value: "h", label: "High" },
];

export const applicantAccomodationsData = [
  { value: "down", label: "1st Floor" },
  { value: "up", label: "2nd Floor" },
  { value: "handicapped", label: "Handicapped" },
];

export const applicantsData = [
  {
    applicantId: "applicantId",
    applicants: [
      {
        firstName: "Leona",
        lastName: "Duckworth",
        ethnicity: applicantEthnicityData[0].value,
        gender: applicantGendersData[0].value,
        phonePrimary: "8569009888",
        phoneSecondary: "7789988880",
        race: applicantRaceData[0].value,
      },
      {
        firstName: "David",
        lastName: "Duckworth",
        ethnicity: applicantEthnicityData[1].value,
        gender: applicantGendersData[1].value,
        phonePrimary: "8562306948",
        race: applicantRaceData[4].value,
      },
    ],
    applicantStatus: applicantStatusData[0].value,
    accomodations: [...applicantAccomodationsData.map((item) => item.value)],
    dateApplied: Reference.dateTime,
    dateRemoved: undefined,
    familySize: 2,
    incomeLevel: applicantIncomeLevelData[0].value,
    rentalAssistance: true,
    sitesAppliedFor: [
      sitesWithUnitsData[0].siteId,
      sitesWithUnitsData[4].siteId,
    ],
    unitSizes: [1, 2],
    notes: "Credit Passed",
  },
];
