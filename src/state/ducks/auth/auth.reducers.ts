import { createReducer } from '@reduxjs/toolkit';

import {
  retrieveCurrentUserToken,
  signInWithEmailAndPassword,
  signOutAndRemoveTokens,
  signUpWithEmailAndPassword,
} from './auth.actions';

export const authInitialState = {
  idToken: '',
};

export default createReducer(authInitialState, (builder) =>
  builder
    .addCase(retrieveCurrentUserToken.fulfilled, (state, action) => {
      return { ...state, idToken: action.payload || '' };
    })
    .addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
      return { ...state, idToken: action.payload || '' };
    })
    .addCase(signUpWithEmailAndPassword.fulfilled, (state, action) => {
      return { ...state, idToken: action.payload || '' };
    })
    .addCase(signOutAndRemoveTokens.fulfilled, (state) => {
      return { ...state, idToken: '' };
    }),
);
