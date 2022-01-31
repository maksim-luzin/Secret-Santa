import { all, call, put, takeEvery } from "redux-saga/effects";
import { IRegistrationData } from "../../../common/interfaces";
import { getWishListService } from "../services";
import { santaAction } from "../actions";

function* santaRequest() {
  try {
    const { firstName, lastName, wishList }: IRegistrationData = yield call(
      getWishListService
    );
    const wishListNorm =
      wishList !== "number" && wishList.indexOf("---") !== -1
        ? wishList.split("---")
        : [String(wishList)];
    yield put(
      santaAction.success({
        firstName,
        lastName,
        wishList: wishListNorm,
      })
    );
  } catch (error) {
    yield put(santaAction.failure("Failed get wish list"));
  }
}

function* watchSantaRequest() {
  yield takeEvery(santaAction.TRIGGER, santaRequest);
}

export default function* authenticationSaga() {
  yield all([watchSantaRequest()]);
}
