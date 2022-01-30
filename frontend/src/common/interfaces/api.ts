import { FetchMethod } from "../enums";

interface IResponse {
  method: FetchMethod;
  headers: {
    "Content-Type": string;
  };
  body?: string;
}

interface IGetFetchArgs {
  <Data>({
    method,
    request,
  }: {
    method: FetchMethod;
    request: Data;
  }): IResponse;
}

export type { IGetFetchArgs };
