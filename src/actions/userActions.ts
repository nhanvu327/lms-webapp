import { GET_PROFILE, REMOVE_PROFILE } from "../constants/actionTypes";

export function getProfile(payload: any) {
  return {
    type: GET_PROFILE,
    payload
  };
}


export function removeProfile() {
  return {
    type: REMOVE_PROFILE
  }
}