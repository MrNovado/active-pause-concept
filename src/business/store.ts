import { AnyAction, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { AppState } from './common';
import { rootSaga } from './saga';

import { time } from './Time/time';
import { player } from './Player/player';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore<
  AppState, //
  AnyAction,
  MiddlewareArray<[SagaMiddleware]>
>({
  reducer: {
    player: player.reducer,
    time: time.reducer,
  },
  middleware: (d) =>
    d({
      thunk: false,
    }) //
      .concat(sagaMiddleware),

  devTools: true,
});

sagaMiddleware.run(rootSaga);
