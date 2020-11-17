import { put } from 'redux-saga/effects';
import { SERVER_DOWN } from '../constants';

export function* serverDownSaga(action: any) {
  yield put({
    type: SERVER_DOWN,
    isServerDown: action.payload.isServerDown,
    message: action.payload.message,
  });
}
