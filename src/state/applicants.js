import { atom, selector, selectorFamily } from "recoil";
import { fullNameValueGetter } from "../formatters/valueGetters";
import {
  applicantsData,
  applicantGendersData,
  applicantStatusData,
  applicantRaceData,
  applicantEthnicityData,
  applicantIncomeLevelData,
} from "./data/applicants";
import { getId, updateState } from "./helpers/dataHelpers";
import { localStorageEffect } from "./localStorageEffect";

export const applicants = atom({
  key: "_applicants",
  default: [],
  effects_UNSTABLE: [localStorageEffect("_applicants", applicantsData)],
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

export const getApplicantsWithName = selector({
  key: "_getApplicantsWithName",
  get: ({ get }) =>
    new get(applicants).map((item) => ({
      ...item,
      applicantsName: (item.applicants || [])
        .map((applicant) => fullNameValueGetter({ row: applicant }))
        .join(", "),
    })),
});

export const getApplicantsMap = selector({
  key: "_getApplicantsMap",
  get: ({ get }) =>
    new Map(get(getApplicantsWithName).map((item) => [item.applicantId, item])),
});

export const getWaitingApplicants = selector({
  key: "_getWaitingApplicants",
  get: ({ get }) =>
    get(getApplicantsWithName).filter(
      ({ applicantStatus }) => applicantStatus === "a"
    ),
});

export const getApplicantFormData = selectorFamily({
  key: "_getApplicantFormData",
  get:
    (applicantId) =>
    ({ get }) =>
      get(getApplicantsMap).get(applicantId) || {
        applicantId: getId(),
        applicantStatus: get(applicantStatus)[0].value,
        incomeLevel: get(applicantIncomeLevel)[0].value,
        dateApplied: Date.now(),
        rentalAssistance: false,
        sitesAppliedFor: [],
        unitSizes: [1, 2],
        familySize: 1,
        applicants: [],
      },
  set:
    () =>
    ({ get, set }, newItem) => {
      const newState = updateState(
        get(applicants),
        (item) => item.applicantId === newItem.applicantId,
        newItem,
        false
      );

      set(applicants, newState);
    },
});
