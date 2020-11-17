import { takeLatest } from "redux-saga/effects";
import { getDataSaga } from "./getDataSaga";

export default function* watcherSaga() {
  yield takeLatest("GET_DATA", getDataSaga);
}
