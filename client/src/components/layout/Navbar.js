import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ icon, title }) => {
  const authContext = useContext(AuthContext);

  const { logout, isAuthenticated, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li> Hello {user && user.name}</li>
      <li>
        <Link to='/'>
          <i className='fas fa-sign-out-alt' onClick={onLogout}>
            <span className='hide-sm'>Logout</span>
          </i>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h2>
        <i className={icon}></i>
        {'  '}
        {title}
      </h2>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
};
<i class=''></i>;
Navbar.defaultProps = {
  icon: 'fa-solid fa-address-card',
  title: 'Contacts App',
};

export default Navbar;
