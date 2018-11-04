export default async function request(
  endpoint: string,
  method: string,
  payload?: Object
): Promise<Response> {
  let data: any = {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    mode: "cors",
  };
  if (method !== "GET") {
    data = {
      ...data,
      body: JSON.stringify(payload)
    };
  }

  // const request: Request = new Request(
  //   `http://localhost:3001${endpoint}`,
  //   data
  // );
  try {
    const res = await fetch(`http://localhost:3001${endpoint}`, data);
    if ((res.status >= 200 && res.status < 300) || res.status === 401) {
      return res.json();
    } else {
      return res.json().then(r => Promise.reject(r.error));
    }
  } catch (error) {
    throw new Error(error);
  }
}
