import { atom, selector } from "recoil";
import {
  applicantsData,
  applicantGendersData,
  applicantStatusData,
  applicantRaceData,
  applicantEthnicityData,
  applicantIncomeData,
} from "./data/applicants";

export const applicants = atom({
  key: "_applicants",
  default: applicantsData,
});

export const applicantGenders = atom({
  key: "_applicantGenders",
  default: applicantGendersData,
});

export const applicantRace = atom({
  key: "_applicantRace",
  default: applicantRaceData,
});

export const applicantEthnicity = atom({
  key: "_applicantEthnicity",
  default: applicantEthnicityData,
});

export const applicantIncome = atom({
  key: "_applicantIncome",
  default: applicantIncomeData,
});

export const applicantStatus = atom({
  key: "_applicantStatus",
  default: applicantStatusData,
});

export const applicantsMap = selector({
  key: "_applicantsMap",
  get: ({ get }) =>
    new Map(get(applicants).map((item) => [item.applicantId, item])),
});
