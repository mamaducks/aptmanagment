import { Reference } from "./reference";
import { tenantsData } from "./tenants";

export const depositsData = [
  {
    depositId: "depositId",
    siteId: tenantsData[0].siteId,
    timestamp: Reference.dateTime,
    amount: 75,
  },
];
