import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return navigate('/login');
};

export default PrivateRoute;
