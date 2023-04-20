import { createAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { initialState } from './time.initial';
import { AppState } from '../common';

export const time = createSlice({
  name: 'time',
  initialState,
  reducers: {
    $start: (state) => {
      state.running = true;
      return state;
    },
    $stop: (state) => {
      state.running = false;
      return state;
    },
  },
});

export const timeActions = {
  ...time.actions,
  tick: createAction(`${time.name}/tick`),
};

const self = (s: AppState): AppState['time'] => s.time;
const running = createSelector(self, (s) => s.running);

export const timeSelectors = {
  self,
  running,
};
