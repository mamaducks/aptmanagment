import { atom } from "recoil";
import { data } from "./data";

export const app = atom({
  key: "app",
  default: data,
});

