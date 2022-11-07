import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user

  //register user

  //login user

  //logout

  //clear errors

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
