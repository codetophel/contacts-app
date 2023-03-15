import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
// import Spinner from '../layout/Spinner';
import setAuthToken from '../../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  // const navigate = useNavigate();

  if (loading && isAuthenticated === null) return <Navigate to='/login' />;
  if (isAuthenticated) return <Component />;
  // return <Spinner />;
};

export default PrivateRoute;
