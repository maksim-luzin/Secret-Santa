import { all, call, put, takeEvery } from "redux-saga/effects";
import { IAction } from "../interfaces";
import { getToken } from "../helpers";
import { isAuthorizedService } from "../services";
import { authorizedAction } from "../actions";

function* authorizedActionRequest(action: IAction) {
  try {
    yield call(isAuthorizedService);

    yield put(authorizedAction.success({ token: getToken() as string }));
  } catch (error) {
    yield put(authorizedAction.failure("Failed registration"));
  }
}

function* watchAuthorizedAction() {
  yield takeEvery(authorizedAction.TRIGGER, authorizedActionRequest);
}

export default function* authenticationSaga() {
  yield all([watchAuthorizedAction()]);
}
