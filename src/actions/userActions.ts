import { GET_PROFILE } from "../constants/actionTypes";

export function getProfile(payload: any) {
  return {
    type: GET_PROFILE,
    payload
  };
}
