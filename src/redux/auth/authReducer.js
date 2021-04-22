import { createReducer, combineReducers } from '@reduxjs/toolkit';

import authActions from './authAction';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  // [authActions.registerError]: setError,
  // [authActions.loginError]: setError,
  // [authActions.logoutError]: setError,
  // [authActions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
  //   isAuthenticated,
});
