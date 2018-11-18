import localStorage from "../services/localStorage";
import { LOCALSTORAGE_TOKEN } from "../constants/app";

export default async function request(
  endpoint: string,
  method: string,
  payload?: Object,
  isPrivate: boolean = true
): Promise<any> {
  let data: any = {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: isPrivate
        ? `Bearer ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`
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
      `https://${process.env.REACT_APP_IP}${
        process.env.NODE_ENV === "development"
          ? `:${process.env.REACT_APP_PORT}`
          : ""
      }${endpoint}`,
      data
    );
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      if (res.status === 401) {
        window.location.href = "/login";
      }
      return res.json().then(r => Promise.reject(r.error));
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
