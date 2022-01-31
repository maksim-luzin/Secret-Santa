import { all } from "redux-saga/effects";
import authenticationSaga from "../../scenes/Auth/sagas";
import santaSaga from "../../scenes/WishList/sagas";
import logoutSaga from "./logout";
import authorizedSaga from "./authorized";

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    santaSaga(),
    logoutSaga(),
    authorizedSaga(),
  ]);
}
