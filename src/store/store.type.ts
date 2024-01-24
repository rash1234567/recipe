/* eslint-disable import/no-cycle */

import type { store } from './store';

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
