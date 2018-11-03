import request from "../helpers/request";
import { REGISTER } from "../constants/endpoints";

export default function registerAPI(payload: {
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<Response> {
  return request(REGISTER, "POST", payload);
}
