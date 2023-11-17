import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundCompany = () => {
  return (
    <div>
      <h1>The page you are looking for does not exist</h1>
      <button>
        <Link to='/companies'>Back</Link>
      </button>
    </div>

  )
}

export default NotFoundCompany;