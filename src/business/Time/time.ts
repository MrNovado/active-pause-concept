import { createAction } from '@reduxjs/toolkit';

const name = 'time';

export const timeActions = {
  tick: createAction(`${name}/tick`),
  $stop: createAction(`${name}/$stop`),
  $start: createAction(`${name}/$start`),
};

export const timeSelectors = {};
