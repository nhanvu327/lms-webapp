import localStorage from "../services/localStorage";
import store from "../helpers/configReduxStore";
import { removeProfile } from "../actions/userActions";

export default async function request(
  endpoint: string,
  method: string,
  payload?: Object,
  isPrivate: boolean = true
): Promise<Response> {
  let data: any = {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: isPrivate
        ? `Bearer ${localStorage.getItem("smartlearning-token")}`
        : null
    },
    credentials: "include",
    mode: "cors"
  };
  if (method !== "GET") {
    data = {
      ...data,
      body: JSON.stringify(payload)
    };
  }

  try {
    const res = await fetch(
      `https://${process.env.REACT_APP_IP}${endpoint}`,
      data
    );
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      if (res.status === 401) {
        store.dispatch(removeProfile());
      }
      return res.json().then(r => Promise.reject(r.error));
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
