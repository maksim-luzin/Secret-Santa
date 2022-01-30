import { all, call, put, takeEvery } from "redux-saga/effects";
import { IToken, IAction } from "../../../common/interfaces";
import { setToken } from "../../../common/helpers";
import { registration } from "../services";
import { registerUserAction } from "../actions";

function* registerUserRequest(action: IAction) {
  try {
    const { token }: IToken = yield call(registration, action.payload);
    setToken(token);
    yield put(registerUserAction.success({ token }));
  } catch (error) {
    yield put(registerUserAction.failure("Failed registration"));
  }
}

function* watchFetchUsersRequest() {
  yield takeEvery(registerUserAction.TRIGGER, registerUserRequest);
}

export default function* authenticationSaga() {
  yield all([watchFetchUsersRequest()]);
}
