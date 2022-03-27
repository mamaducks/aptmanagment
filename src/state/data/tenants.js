import { applicantsData } from "./applicants";
import { Reference } from "./reference";

export const tenantsData = [
  {
    siteId: Reference.defaultSiteId,
    unitId: Reference.defaultUnitId,
    applicantId: applicantsData[0].applicantId,
    dateMoveIn: Reference.dateTime,
    dateLease: Reference.dateTime,
    dateRenewal: Reference.dateTimePlusMonth,
    dateMoveOut: Reference.dateTime,
  },
];
