/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, fork } from 'typed-redux-saga';
import { timeSagaList } from './Time/time.saga';

/**
 * * https://redux-saga.js.org/docs/advanced/RootSaga#non-blocking-fork-effects
 * * https://redux-saga.js.org/docs/advanced/RootSaga#keeping-everything-alive
 * * https://github.com/redux-saga/redux-saga/issues/1633
 */
export function* rootSaga() {
  const sagas = [
    ...timeSagaList, //
  ];

  // * `spawn` does not attach their `task` object to root
  // * `fork` has the primary benefit of easy cancelation management
  // * `sagaTask.toPromise()` will await all forked tasks
  // * `spawn` tasks will not be awaited and require additional management
  // * https://github.com/redux-saga/redux-saga/issues/1633
  yield* all(sagas.map(fork));
}
