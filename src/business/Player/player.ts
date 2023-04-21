import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { AppState } from '../common';
import { timeActions } from '../Time';
import { initialState } from './player.initial';
import { TIME_CFG } from '../Time/time.config';

export const player = createSlice({
  name: 'player',
  initialState,
  reducers: {
    move: (state, action: PayloadAction<AppState['player']['coords']>) => {
      state.coords = action.payload;
      return state;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(timeActions.tick, (state, action) => {
      const { elapsedRT } = action.payload;
      const fullTicks = elapsedRT / TIME_CFG.tickRT;
      state.coords.x += fullTicks * 0.2;
      state.coords.y += fullTicks * 0.1;
      return state;
    }),
});

export const playerReducer = player.reducer;

export const playerActions = {
  ...player.actions,
};

const self = (s: AppState): AppState['player'] => s.player;
const coords = createSelector(self, (s) => s.coords);

export const playerSelectors = {
  self,
  coords,
};
