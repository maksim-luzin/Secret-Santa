import { createRoutine } from "redux-saga-routines";

export enum LogoutAction {
  LOGOUT = "LOGOUT",
}

export const logoutAction = createRoutine(LogoutAction.LOGOUT, {
  trigger: () => null,
  success: () => null,
  failure: (error: string) => error,
});

export type LogoutActionType = ReturnType<typeof logoutAction.trigger>;
export type LogoutSuccessActionType = ReturnType<typeof logoutAction.success>;
export type LogoutFailureActionType = ReturnType<typeof logoutAction.failure>;
