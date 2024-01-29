import { createSlice } from '@reduxjs/toolkit';

const securitySlice = createSlice({
  name: 'security',
  initialState: {
    user: null
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  }
});

const { actions, reducer } = securitySlice;

export const { setUser } = actions;

export default reducer;
