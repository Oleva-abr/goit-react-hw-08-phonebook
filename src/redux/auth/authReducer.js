import { createReducer, combineReducers } from '@reduxjs/toolkit';

import authActions from './authAction';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {});
const token = createReducer(null, {});
const error = createReducer(null, {});

export default combineReducers({
  user,
  token,
  error,
  //   isAuthenticated,
});
