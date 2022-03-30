import { Reference } from "./reference";
import { sitesWithUnitsData} from './sitesWithUnits'

export const depositsData = [
 {
    depositId: "depositId1",
    siteId: sitesWithUnitsData[0].siteId,
    timestamp: Reference.dateTime,
    amount: 75,
  },
  {
    depositId: "depositId2",
    siteId: sitesWithUnitsData[0].siteId,
    timestamp: Reference.dateTimePlusDay,
    amount: 15,
  },
];
