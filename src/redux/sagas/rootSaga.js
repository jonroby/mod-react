import { all, call } from "redux-saga/effects";
import counter from "./counter";
import testSaga2 from "./testSaga2";

import testSaga3 from "./testSaga3";

import myCounter from "./myCounter";

import newCounter from "./newCounter";

import newCounter2 from "./newCounter2";

import newCounter3 from "./newCounter3";

export default function* rootSaga() {
  yield all([
    call(counter),
    call(testSaga2),
    call(testSaga3),
    call(myCounter),
    call(newCounter),
    call(newCounter2),
    call(newCounter3)
  ]);
}
