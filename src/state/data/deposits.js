import { Reference } from "./reference";
import { tenantsData } from "./tenants";

export const depositsData = [
 {
    depositId: "depositId1",
    siteId: tenantsData[0].siteId,
    timestamp: Reference.dateTime,
    amount: 75,
  },
  {
    depositId: "depositId2",
    siteId: tenantsData[0].siteId,
    timestamp: Reference.dateTimePlusDay,
    amount: 15,
  },
];
