import request from "../helpers/request";
import { REGISTER } from "../constants/endpoints";

export default function registerAPI(payload: {
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<{
  success: Boolean;
  payload?: any;
  error?: {
    error_code: Number;
    message: String | String[];
  };
}> {
  return request(REGISTER, "POST", payload, false);
}
