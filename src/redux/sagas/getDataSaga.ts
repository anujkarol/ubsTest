import { put, call } from "redux-saga/effects";
import { GET_DATA_SUCCESS, GET_DATA_FAILURE } from "../constants";
import { instance } from "../../helpers/interceptor";

export function* getDataSaga() {
  try {
    const response = yield call(() =>
      instance({
        method: "GET",
        url: `/?i=onions,garlic&q=omelet&p=3`,
      })
    );

    yield put({
      type: GET_DATA_SUCCESS,
      data: response.data.results,
    });
    debugger;
  } catch (error) {
    yield put({
      type: GET_DATA_FAILURE,
      message: error.message,
    });
  }
}
