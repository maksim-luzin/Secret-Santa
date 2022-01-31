import { IWishData } from "../../../common/interfaces";
import { createReducer } from "../../../common/helpers";
import {
  santaAction,
  SantaActionFailureActionType,
  SantaActionSuccessActionType,
} from "../actions";

import { logoutAction } from "../../../common/actions/logout";

export interface ISantaState {
  isLoading: boolean;
  error: string;
  list: IWishData;
}

export const initialState: ISantaState = {
  isLoading: false,
  error: "",
  list: {
    firstName: "",
    lastName: "",
    wishList: [],
  },
};

export const authenticationReducer = createReducer<ISantaState>(initialState, {
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
      list: action.payload,
    };
  },
  [santaAction.FAILURE](state, action: SantaActionFailureActionType) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  },
  [logoutAction.SUCCESS]() {
    return {
      ...initialState,
    };
  },
});

export default authenticationReducer;
