import { Reference } from "./reference";
import { sitesWithUnitsData } from "./sitesWithUnits";

export const applicantGendersData = [
  { genderId: "male", displayName: "Male" },
  { genderId: "female", displayName: "Female" },
];

export const applicantRaceData = [
  { raceId: "1", displayName: "American Indian or Alaskan Native" },
  { raceId: "2", displayName: "Asian" },
  { raceId: "3", displayName: "Black or African American" },
  {
    raceId: "4",
    displayName: "Native Hawiian or Pacific Islander",
  },
  { raceId: "5", displayName: "White" },
];

export const applicantEthnicityData = [
  { ethnicityId: "a", displayName: "hispanic latino" },
  { ethnicityId: "b", displayName: "non hispanic latino" },
];

export const applicantStatusData = [
  { statusId: "pending", displayName: "Pending" },
  { statusId: "approved", displayName: "Approved" },
  { statusId: "withdrawn", displayName: "Withdrawn" },
  { statusId: "rejected", displayName: "Rejected" },
];

export const applicantIncomeData = [
  { incomeId: "l", displayName: "Low" },
  { incomeId: "vl", displayName: "Very Low" },
  { incomeId: "m", displayName: "Medium" },
  { incomeId: "h", displayName: "High" },
];

export const applicantAccomidationsDate = [
  { accomidationId: "1floor", displayName: "1st Floor" },
  { accomidationId: "2floor", displayName: "2nd Floor" },
  { accomidationId: "handicapped", displayName: "Handicapped" },
  { accomidationId: "rentalAssistance", displayName: "Handicapped" },
];

export const applicantsData = [
  {
    dateApplied: Reference.dateTime,
    firstName: "Leona",
    lastName: "Duckworth",
    gender: applicantGendersData[0].genderId,
    status: applicantStatusData[0].statusId,
    race: applicantRaceData[0].raceId,
    ethnicity: applicantEthnicityData[0].ethnicityId,
    income: applicantIncomeData[0].incomeId,
    familySize: 1,
    beds: 1,
    applicantId: "applicantId",
    sitesAppliedFor: [sitesWithUnitsData[0].siteId, sitesWithUnitsData[1].siteId],
  },
];
