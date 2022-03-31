import { depositsData } from "./deposits";
import { Reference } from "./reference";
import { tenantsData } from "./tenants";

export const paymentsData = [
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTime,
    depositId: depositsData[0].depositId,
    amount: 45,
  },
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTimePlusDay,
    depositId: depositsData[0].depositId,
    amount: 30,
  },
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTimePlusDay,
    depositId: depositsData[1].depositId,
    amount: 15,
  },
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTimePlusDay + 1,
    amount: 5,
  },
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTime + 1,
    amount: 2,
  },
];
