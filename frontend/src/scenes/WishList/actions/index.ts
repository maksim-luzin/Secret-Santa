import { createRoutine } from "redux-saga-routines";
import { IRegistrationData, IWishData } from "../../../common/interfaces";

export enum SantaActions {
  WISH_LIST = "WISH_LIST",
}

export const santaAction = createRoutine(SantaActions.WISH_LIST, {
  trigger: (wishList: IRegistrationData) => wishList,
  success: (wishList: IWishData) => wishList,
  failure: (error: string) => error,
});

export type SantaActionType = ReturnType<typeof santaAction.trigger>;
export type SantaActionSuccessActionType = ReturnType<
  typeof santaAction.success
>;
export type SantaActionFailureActionType = ReturnType<
  typeof santaAction.failure
>;
