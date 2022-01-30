import { createRoutine } from "redux-saga-routines";
import { IRegistrationData, IToken } from "../../../common/interfaces";

export enum AuthenticationActions {
  REGISTER_USER = "AUTHENTICATION/REGISTER_USER",
}

export const registerUserAction = createRoutine(
  AuthenticationActions.REGISTER_USER,
  {
    trigger: (data: IRegistrationData) => data,
    success: (token: IToken) => token,
    failure: (error: string) => error,
  }
);

export type RegisterUserActionType = ReturnType<
  typeof registerUserAction.trigger
>;
export type RegisterUserSuccessActionType = ReturnType<
  typeof registerUserAction.success
>;
export type RegisterUserFailureActionType = ReturnType<
  typeof registerUserAction.failure
>;
