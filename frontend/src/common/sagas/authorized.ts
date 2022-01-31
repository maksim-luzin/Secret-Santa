import { all, call, put, takeEvery } from "redux-saga/effects";
import { IAction, IToken } from "../interfaces";
import { getToken } from "../helpers";
import { isAuthorizedService } from "../services";
import { authorizedAction } from "../actions";

function* authorizedActionRequest(action: IAction) {
  try {
    const { id }: IToken = yield call(isAuthorizedService);
    yield put(authorizedAction.success({ id, token: getToken() as string }));
  } catch {
    yield put(authorizedAction.failure(""));
  }
}

function* watchAuthorizedAction() {
  yield takeEvery(authorizedAction.TRIGGER, authorizedActionRequest);
}

export default function* authorizedSaga() {
  yield all([watchAuthorizedAction()]);
}
