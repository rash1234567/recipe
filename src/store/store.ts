/* eslint-disable import/no-cycle */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Use AsyncStorage for React Native
import type { PayloadAction } from '@reduxjs/toolkit';

import authReducer, { logout } from '../redux/auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const appReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

const rootReducer = (state: any, action: PayloadAction<any>) => {
  // If a logout action is dispatched, reset the entire state to its initial state
  if (action.type === logout.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}

export const store = makeStore();

export const persistor = persistStore(store);
