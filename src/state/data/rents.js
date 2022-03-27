import { Reference } from "./reference";
import { tenantsData } from "./tenants";

export const rentsData = [
  {
    siteId: tenantsData[0].siteId,
    unitId: tenantsData[0].unitId,
    applicantId: tenantsData[0].applicantId,
    timestamp: Reference.dateTime,
    amount: 100,
  },
];
