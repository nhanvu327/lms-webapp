import request from "../helpers/request";
import { LOGIN } from "../constants/endpoints";

export default function loginAPI(payload: {
  email: string;
  password: string;
}): Promise<Response> {
  return request(LOGIN, "POST", payload);
}
