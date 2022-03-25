import { atom } from "recoil";
import { data } from "./data";
import { localStorageEffect } from "./localStorage";

export const allDeposits = atom({
  key: "allDeposits",
  default: data.deposits,
  effects_UNSTABLE: [localStorageEffect("allDeposits", [])],
});
