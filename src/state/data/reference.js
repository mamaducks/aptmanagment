import { sitesWithUnitsData } from "./sitesWithUnits";

const MONTH = 1000 * 60 * 60 * 24 * 30;
const YEAR = 1000 * 60 * 60 * 24 * 365;

export const Reference = {
  dateTime: 1648147376277,
  dateTimePlusMonth: 1648147376277 + MONTH,
  dateTimePlusYear: 1648147376277 + YEAR,
  defaultSiteId: sitesWithUnitsData[0].siteId,
  defaultUnitId: sitesWithUnitsData[0].units[0].unitId,
};
