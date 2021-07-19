import { takeEvery, put } from "@redux-saga/core/effects";
import delay from "redux-saga"

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: 'AGE_UP_ASYNC', value: 1 })
}
export function* WatchAgeUp() {
  yield takeEvery('AGE_UP', ageUpAsync)
}