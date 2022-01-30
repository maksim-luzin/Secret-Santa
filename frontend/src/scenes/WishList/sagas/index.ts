import { all, call, put, takeEvery } from "redux-saga/effects";
import { IRegistrationData } from "../../../common/interfaces";
import { getWishListService } from "../services";
import { santaAction } from "../actions";

function* santaRequest() {
  try {
    const wishList: IRegistrationData = yield call(getWishListService);
    const wishListNorm =
      wishList.wishList !== "number" && wishList.wishList.indexOf("---")
        ? wishList.wishList.split("---")
        : [String(wishList.wishList)];
    yield put(
      santaAction.success({
        firstName: wishList.firstName,
        lastName: wishList.lastName,
        wishList: wishListNorm,
      })
    );
  } catch (error) {
    yield put(santaAction.failure("Failed registration"));
  }
}

function* watchSantaRequest() {
  yield takeEvery(santaAction.TRIGGER, santaRequest);
}

export default function* authenticationSaga() {
  yield all([watchSantaRequest()]);
}
