import {
  fetchSignIn,
  fetchSignUp,
  fetchSignOut,
  fetchVerifyAuth,
  fetchProfile,
  fetchFillProfile,
  fetchGetAnswersById,
} from './Action';
import Api from '../../Api/Api';
import {
  saveDataToStorage,
  clearDataFromStorage,
  readDataFromStorage,
} from '../../AsyncStorage/Storage';
import {useEffect} from 'react';

export const signIn = (email, password) => (dispatch) => {
  const data = {
    email: email,
    password: password,
  };
  return new Promise(() => {
    Api.post('/login', data)
      .then((res) => {
        if (res.data.StatusCode == 200) {
          saveDataToStorage(res.data.Model);
          dispatch(fetchSignIn(data));
        } else {
          alert(res.data.Message);
        }
      })
      .catch((e) => alert(e));
  });
};

export const signUp = (name, surname, email, password) => (dispatch) => {
  const data = {
    name: name,
    surname: surname,
    email: email,
    password: password,
  };

  return new Promise(() => {
    Api.post('/mobile-user', data)
      .then((res) => {
        if (res.data.StatusCode == 201) {
          saveDataToStorage(res.data.Model);
          dispatch(fetchSignUp(data));
        } else {
          alert(res.data.result);
        }
      })
      .catch((e) => alert(e));
  });
};

export const signOut = () => (dispatch) => {
  return new Promise(() => {
    clearDataFromStorage();
    dispatch(fetchSignOut());
  });
};

export const verifyAuth = (data, userLog) => (dispatch) => {
  return new Promise(() => {
    if (userLog) {
      dispatch(fetchSignIn(data));
    } else {
      dispatch(fetchSignOut());
    }
  });
};

export const verifyProfile = () => (dispatch) => {
  return new Promise(() => {
    Api.get('/mobile-profile/fields')
      .then((res) => {
        dispatch(fetchProfile(res.data));
      })
      .catch((e) => alert(e));
  });
};

export const fillProfile = () => (dispatch) => {
  return new Promise(() => {
    dispatch(fetchFillProfile());
  });
};
