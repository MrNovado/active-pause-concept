/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, delay, put, race, select, take } from 'typed-redux-saga';
import { timeActions, timeSelectors } from './time';
import { TIME_CFG } from './time.config';

const timeRef = {
  current: new Date(),
};

function* clock() {
  timeRef.current = new Date();
  yield* delay(TIME_CFG.tickRT);
  yield* put(timeActions.tick(timeRef.current));
}

function* timeStep() {
  const running = yield* select(timeSelectors.running);
  if (running === false) {
    yield* take(timeActions.$$start.type);
  }

  while (true) {
    const { stop } = yield* race({
      clock: call(clock), //
      stop: take(timeActions.$$stop.type),
    });

    if (stop) {
      yield* put(timeActions.tick(timeRef.current));
      yield* take(timeActions.$$start.type);
    }
  }
}

export const timeSagaList = [timeStep];
