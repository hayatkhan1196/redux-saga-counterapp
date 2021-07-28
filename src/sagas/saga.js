
import delay from "redux-saga"
import { takeLatest, put, all } from 'redux-saga/effects';
import * as actionType from '../component/actions'

function* ageUpAsync({ payload }) {
  yield delay(4000);
  payload = payload + 1
  yield put({ type: actionType.INCREMENT_COUNT_RECEIVED, value: payload })
}
export function* WatchAgeUp() {
  yield takeLatest(actionType.INCREMENT_COUNT_REQUEST, ageUpAsync)
}

export function* rootSaga() {
  yield all([

    WatchAgeUp()

  ])

}