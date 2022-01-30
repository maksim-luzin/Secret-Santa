import { all, put, takeEvery } from "redux-saga/effects";
import { IAction } from "../interfaces";
import { logoutAction } from "../actions";
import { setToken } from "../helpers";

function* logoutActionRequest(action: IAction) {
  try {
    setToken("");
    yield put(logoutAction.success());
  } catch (error) {
    yield put(logoutAction.failure("Failed registration"));
  }
}

function* watchLogoutAction() {
  yield takeEvery(logoutAction.TRIGGER, logoutActionRequest);
}

export default function* logoutSaga() {
  yield all([watchLogoutAction()]);
}
