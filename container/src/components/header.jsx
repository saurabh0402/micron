import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2> Header Here!!</h2>
      <Link to="/"> Home </Link>
      <Link to="/auth/login"> Login </Link>
    </div>
  );
};

export default Header;
