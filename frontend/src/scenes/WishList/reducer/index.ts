import { IWishData } from "../../../common/interfaces";
import { createReducer } from "../../../common/helpers";
import {
  santaAction,
  SantaActionFailureActionType,
  SantaActionSuccessActionType,
} from "../actions";

import { logoutAction } from "../../../common/actions/logout";

export interface SantaState {
  isLoading: boolean;
  wishList: IWishData | null;
  error: string;
}

export const initialState: SantaState = {
  isLoading: false,
  wishList: null,
  error: "",
};

export const authenticationReducer = createReducer<SantaState>(initialState, {
  [santaAction.TRIGGER](state) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [santaAction.SUCCESS](state, action: SantaActionSuccessActionType) {
    return {
      ...state,
      isLoading: false,
      wishList: action.payload,
    };
  },
  [santaAction.FAILURE](state, action: SantaActionFailureActionType) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  },
  [logoutAction.SUCCESS](state) {
    return {
      isLoading: false,
      wishList: null,
      error: "",
    };
  },
});

export default authenticationReducer;
