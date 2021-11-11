import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/user';
const StorageKeys = {
    TOKEN: 'ACCESS_TOKEN',
    USER: 'USER'
};


export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);

  console.log(data)

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
