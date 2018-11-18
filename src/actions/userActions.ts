import { SAVE_PROFILE, REMOVE_PROFILE } from "../constants/actionTypes";

export function saveProfile(payload: any) {
  return {
    type: SAVE_PROFILE,
    payload
  };
}


export function removeProfile() {
  return {
    type: REMOVE_PROFILE
  }
}