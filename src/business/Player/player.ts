import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { AppState } from '../common';
import { initialState } from './player.initial';

export const player = createSlice({
  name: 'player',
  initialState,
  reducers: {
    move: (state, action: PayloadAction<{ x: number; y: number; z: number }>) => {
      state.coords = action.payload;
      return state;
    },
  },
});

export const playerActions = {
  ...player.actions,
};

const self = (s: AppState): AppState['player'] => s.player;
const coords = createSelector(self, (s) => s.coords);

export const playerSelectors = {
  self,
  coords,
};
