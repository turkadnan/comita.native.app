import ACTION_TYPES from './ActionTypes';

export const fetchSignIn = (data) => ({
  type: ACTION_TYPES.SIGN_IN,
  payload: data,
});

export const fetchSignUp = (data) => ({
  type: ACTION_TYPES.SIGN_UP,
  payload: data,
});

export const fetchSignOut = () => ({
  type: ACTION_TYPES.SIGN_OUT,
});

export const fetchVerifyAuth = (data) => ({
  type: ACTION_TYPES.VERIFY_AUTH,
  payload: data,
});

export const fetchProfile = (data) => ({
  type: ACTION_TYPES.VERIFY_PROFILE,
  payload: data,
});

export const fetchFillProfile = (data) => ({
  type: ACTION_TYPES.FILL_PROFILE,
  payload: data,
});
