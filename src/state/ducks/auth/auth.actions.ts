import firebase, { auth } from 'firebase';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignInData } from '../../../models/auth.models';

export const retrieveCurrentUserToken = createAsyncThunk(
  'expo-firebase/auth/retrieve-current-user-token',
  async (user: firebase.User | null, { rejectWithValue }) => {
    try {
      return user ? user.getIdToken() : '';
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const signInWithEmailAndPassword = createAsyncThunk(
  'expo-firebase/auth/sign-in-with-email-and-password',
  async (data: SignInData, { rejectWithValue }) => {
    try {
      const { username, password } = data;
      const { user } = await auth().signInWithEmailAndPassword(username, password);

      return user ? user.getIdToken() : '';
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const signUpWithEmailAndPassword = createAsyncThunk(
  'expo-firebase/auth/sign-up-with-email-and-password',
  async (data: SignInData, { rejectWithValue }) => {
    try {
      const { username, password } = data;
      const { user } = await auth().createUserWithEmailAndPassword(username, password);

      return user ? user.getIdToken() : '';
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const signOutAndRemoveTokens = createAsyncThunk(
  'expo-firebase/auth/sign-out-and-remove-tokens',
  async (_, { rejectWithValue }) => {
    try {
      return auth().signOut();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
