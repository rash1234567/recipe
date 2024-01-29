/* eslint-disable import/no-cycle */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store/store.type";

export interface User {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
  is_subscribed: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | undefined;
  access: string | undefined;
  sessionStatus: "on" | "expired" | undefined;
}

const initialState: AuthState = {
  user: undefined,
  access: undefined,
  sessionStatus: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state: AuthState,
      action: PayloadAction<{ user: User; access: string; }>
    ) => {
      const { user, access } = action.payload;
      state.user = user;
      state.access = access;
    },
    logout: () => initialState,
    update: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    sessionExpired: (state: AuthState) => {
      state.sessionStatus = "expired";
    },
  },
});

export const { login, logout, update, sessionExpired } = authSlice.actions;

// Selectors
export const selectUser = (state: AppState): AuthState => (state.auth as any).user;
export const selectToken = (state: AppState): string | undefined =>
  state.auth.access;
export const selectSessionStatus = (
  state: AppState
): "on" | "expired" | undefined => state.auth.sessionStatus;

export default authSlice.reducer;

