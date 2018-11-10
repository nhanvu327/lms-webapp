import request from "../helpers/request";
import { PROFILE } from "../constants/endpoints";

export default function getProfileAPI(): Promise<any> {
  return request(PROFILE, "GET");
}
  