import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import security from 'store/security';

const reducer = combineReducers({
  security
});

const store = configureStore({ reducer });

export default store;
