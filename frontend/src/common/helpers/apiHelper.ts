import { IGetFetchArgs } from "../interfaces";
import { FetchMethod } from "../enums";
import { getToken } from "./getToken";

const getFetchArgs: IGetFetchArgs = ({ method, request }) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  if (token) {
    Object.assign(headers, { Authorization: `Bearer ${token}` });
  }

  const response =
    method === FetchMethod.GET
      ? {
          headers,
          method,
        }
      : {
          headers,
          method,
          body: request ? JSON.stringify(request) : "{}",
        };

  return response;
};

const throwIfResponseFailed = async (res: any) => {
  if (!res.ok) {
    let parsedException = "Something went wrong with request!";
    try {
      parsedException = await res.json();
    } catch (err) {
      //
    }
    throw parsedException;
  }
};

const api = async <Data>({
  endpoint,
  method,
  request,
}: {
  endpoint: string;
  method: FetchMethod;
  request: Data;
}) => {
  const res = await fetch(endpoint, getFetchArgs({ method, request }));
  await throwIfResponseFailed(res);
  return res;
};

export { api };
