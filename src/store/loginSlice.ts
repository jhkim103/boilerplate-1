import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ILoginState {
  params: { id: string; password: string };
  result: boolean;
}

const loginSlice = createSlice({
  name: 'loginAction',
  initialState: {
    params: {
      id: '',
      password: '',
    },
    result: false,
  },
  reducers: {
    setLoginParam: (state, action: PayloadAction<{ id: string; password: string }>) => {
      state.params = action.payload;
      state.result = false;
    },
    setLoginResult: (state, action: PayloadAction<boolean>) => {
      state.params = {
        id: '',
        password: '',
      };
      state.result = action.payload;
    },
  },
});

export const { setLoginParam, setLoginResult } = loginSlice.actions;

export default loginSlice.reducer;
