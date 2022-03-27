import { atom, selector } from "recoil";
import {
  applicantsData,
  applicantGendersData,
  applicantStatusData,
  applicantRaceData,
  applicantEthnicityData,
  applicantIncomeLevelData,
} from "./data/applicants";
import { getSiteTenantSummaryInfo } from "./sites";

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

export const applicantIncomeLevel = atom({
  key: "_applicantIncomeLevel",
  default: applicantIncomeLevelData,
});

export const applicantStatus = atom({
  key: "_applicantStatus",
  default: applicantStatusData,
});

export const getApplicantsMap = selector({
  key: "_getApplicantsMap",
  get: ({ get }) =>
    new Map(get(applicants).map((item) => [item.applicantId, item])),
});

export const getWaitingApplicants = selector({
  key: "_getWaitingApplicants",
  get: ({ get }) =>
    get(applicants).filter(({ applicantStatus }) => applicantStatus === "a"),
});


