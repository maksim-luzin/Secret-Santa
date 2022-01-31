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

export interface IAuthenticationState {
  isLoading: boolean;
  token: string | null;
  id: number | null;
  error: string;
}

export const initialState: IAuthenticationState = {
  isLoading: false,
  token: null,
  id: null,
  error: "",
};

export const authenticationReducer = createReducer<IAuthenticationState>(
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
        id: action.payload.id,
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
        id: action.payload.id,
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
      return { ...initialState };
    },
  }
);

export default authenticationReducer;
