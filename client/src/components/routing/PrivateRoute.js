import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  const navigate = useNavigate();

  if (!isAuthenticated && !loading) {
    <Component />;
  } else {
    return navigate('/login');
  }
};

export default PrivateRoute;
