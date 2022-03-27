import { atom, selector } from "recoil";
import { depositsData } from "./data/deposits";

export const deposits = atom({
    key: "_deposits",
    default: depositsData,
  });

