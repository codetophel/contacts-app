import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h2>
        <i className={icon}></i>
        {'  '}
        {title}
      </h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
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
