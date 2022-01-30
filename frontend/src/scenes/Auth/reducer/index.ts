import { createReducer } from "../../../common/helpers";
import {
  registerUserAction,
  RegisterUserFailureActionType,
  RegisterUserSuccessActionType,
} from "../actions";

import {
  authorizedAction,
  AuthorizedActionFailureActionType,
  AuthorizedActionSuccessActionType,
} from "../../../common/actions/authorized";

import { logoutAction } from "../../../common/actions/logout";

export interface AuthenticationState {
  isLoading: boolean;
  token: string | null;
  error: string;
}

export const initialState: AuthenticationState = {
  isLoading: false,
  token: null,
  error: "",
};

export const authenticationReducer = createReducer<AuthenticationState>(
  initialState,
  {
    [registerUserAction.TRIGGER](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerUserAction.SUCCESS](state, action: RegisterUserSuccessActionType) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
      };
    },
    [registerUserAction.FAILURE](state, action: RegisterUserFailureActionType) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [authorizedAction.TRIGGER](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [authorizedAction.SUCCESS](
      state,
      action: AuthorizedActionSuccessActionType
    ) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
      };
    },
    [authorizedAction.FAILURE](
      state,
      action: AuthorizedActionFailureActionType
    ) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [logoutAction.SUCCESS](state) {
      return {
        isLoading: false,
        token: null,
        error: "",
      };
    },
  }
);

export default authenticationReducer;
