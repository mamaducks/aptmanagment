import { Reference } from "./reference";
import { tenantsData } from "./tenants";

export const paymentsData = [
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTime,
    amount: 75,
  },
];
