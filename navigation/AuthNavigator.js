import React, {useState, useEffect, createContext} from 'react';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';
import {useDispatch, useSelector} from 'react-redux';
import {verifyAuth, verifyProfile} from '../store/actions/ActionCreator';
import {readDataFromStorage} from '../AsyncStorage/Storage';
export const AuthContext = createContext(null);

export default function AuthNavigator() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.appReducer.data);
  const logged = useSelector((state) => state.appReducer.userIn);

  useEffect(() => {
    const user = async () => {
      dispatch(verifyProfile());
      let userLog = await readDataFromStorage();
      dispatch(verifyAuth(data, userLog));
    };
    user();
  }, []);

  return logged ? (
    <AuthContext.Provider value={data}>
      <SignInStack />
    </AuthContext.Provider>
  ) : (
    <SignOutStack />
  );
}
