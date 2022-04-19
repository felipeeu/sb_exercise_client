import { atom } from "recoil";
import { defaultInputValueState } from "./defaults";

export const inputValueState = atom({
  key: "inputValueState",
  default: defaultInputValueState,
});
