import {all} from 'redux-saga/effects'
import watcherSaga from './watcher'

export default function* rootSaga() {
  yield all([watcherSaga()])
}
