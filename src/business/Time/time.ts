import { createAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../common';
import { TIME_CFG } from './time.config';
import { initialState } from './time.initial';

export const time = createSlice({
  name: 'time',
  initialState,
  reducers: {
    $$start: (state) => {
      state.running = true;
      return state;
    },
    $$stop: (state) => {
      state.running = false;
      return state;
    },
  },
});

export const timeActions = {
  ...time.actions,
  tick: createAction(
    `${time.name}/tick`, //
    (startOrElapsedT?: Date | number) => {
      if (startOrElapsedT === undefined) {
        return { payload: { elapsedRT: TIME_CFG.tickRT } };
      }

      if (typeof startOrElapsedT === 'object') {
        const startT = startOrElapsedT;
        return { payload: { elapsedRT: new Date().valueOf() - startT.valueOf() } };
      }

      const elapsedRT = startOrElapsedT;
      return { payload: { elapsedRT } };
    },
  ),
};

const self = (s: AppState): AppState['time'] => s.time;
const running = createSelector(self, (s) => s.running);

export const timeSelectors = {
  self,
  running,
};
