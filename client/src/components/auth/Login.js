import React, { useState, useEffect, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Navigate } from 'react-router-dom';
import { useAuth, clearErrors, login } from '../../context/auth/AuthState';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [authState, authDispatch] = useAuth();
  const { error, isAuthenticated } = authState;

  useEffect(() => {
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors(authDispatch);
    }
  }, [error, isAuthenticated, authDispatch, setAlert]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login(authDispatch, {
        email,
        password,
      });
    }
  };
  if (isAuthenticated) return <Navigate to='/' />;
  return (
    <div>
      <div className='form-container'>
        <h1>
          Account
          <span className='text-primary'> Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              value={email}
              required
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              required
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type='submit'
              value='Login'
              className='btn btn-block btn-primary'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
