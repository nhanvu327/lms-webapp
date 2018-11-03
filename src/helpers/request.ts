export default async function request(
  endpoint: string,
  method: string,
  payload?: Object
): Promise<Response> {
  let data: any = {
    method,
    mode: "cors"
  };
  if (method !== "GET") {
    data = {
      ...data,
      body: JSON.stringify(payload)
    };
  }
  const request: Request = new Request(endpoint, data);
  try {
    const res = await fetch(request);
    if ((res.status >= 200 && res.status < 300) || res.status === 401) {
      return res.json();
    } else {
      return res.json().then(r => {
        throw new Error(r.error || res.statusText);
      });
    }
  } catch (error) {
    throw new Error(error);
  }
}
