/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, delay, put, race, take } from 'typed-redux-saga';
import { timeActions } from './time';

function* clock() {
  yield* delay(1000);
  yield* put(timeActions.tick());
}

function* timeStep() {
  yield* take(timeActions.$start.type);

  while (true) {
    const { stop } = yield* race({
      clock: call(clock), //
      stop: take(timeActions.$stop.type),
    });

    if (stop) {
      yield* take(timeActions.$start.type);
    }
  }
}

export const timeSagaList = [timeStep];
