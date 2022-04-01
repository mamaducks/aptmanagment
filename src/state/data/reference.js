import { sitesWithUnitsData } from "./sitesWithUnits";

export const DAY = 1000 * 60 * 60 * 24;
export const MONTH = DAY * 30;
export const YEAR = MONTH * 12;

export const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const date = new Date();
export const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
export const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
export let month = monthName[date.getMonth()];
export let prevMonth = monthName[date.getMonth() - 1];
export let year = new Date().getFullYear();

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
