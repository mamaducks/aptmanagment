import { applicantsData } from "./applicants";
import { Reference } from "./reference";

export const tenantsData = [
  {
    siteId: "edgewoodAcres",
    unitId: "A01",
    applicantId: applicantsData[0].applicantId,
    dateMoveIn: Reference.dateTime,
    dateLease: Reference.dateTime,
    dateRenewal: Reference.dateTimePlusYear,
  },
];
