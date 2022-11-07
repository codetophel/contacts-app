import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <div>
        <Link to='/'>
          <button className='btn btn-sm btn-light my-1'>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
