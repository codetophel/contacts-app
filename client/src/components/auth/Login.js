import React, { useState, useEffect, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearError, isAuthenticated } = authContext;

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearError();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };
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
