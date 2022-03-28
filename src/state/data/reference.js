import { sitesWithUnitsData } from "./sitesWithUnits";

export const DAY = 1000 * 60 * 60 * 24;
export const MONTH = DAY * 30;
export const YEAR = MONTH * 12;

export const Reference = {
  dateTime: 1648147376277,
  dateTimePlusDay: 1648147376277 + MONTH,
  dateTimePlusMonth: 1648147376277 + MONTH,
  dateTimePlusYear: 1648147376277 + YEAR,
  defaultSiteId: sitesWithUnitsData[0].siteId,
  defaultUnitId: sitesWithUnitsData[0].units[0].unitId,
  yesNoOptions: [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
};
