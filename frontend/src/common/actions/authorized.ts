import { createRoutine } from "redux-saga-routines";
import { IToken } from "../interfaces";

export enum AuthorizedAction {
  AUTHORIZED_USER = "AUTHORIZED_USER",
}

export const authorizedAction = createRoutine(
  AuthorizedAction.AUTHORIZED_USER,
  {
    trigger: () => null,
    success: (token: IToken) => token,
    failure: (error: string) => error,
  }
);

export type SantaActionType = ReturnType<typeof authorizedAction.trigger>;
export type AuthorizedActionSuccessActionType = ReturnType<
  typeof authorizedAction.success
>;
export type AuthorizedActionFailureActionType = ReturnType<
  typeof authorizedAction.failure
>;
