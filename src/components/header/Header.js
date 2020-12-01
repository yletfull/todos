import React from 'react';
import propTypes from 'prop-types';
import './header.css';

const Header = (props) => {
  const { logoText } = props;
  return (
    <header>
      <h1 className="header__logo-text">{logoText}</h1>
    </header>
  );
};

Header.propTypes = {
  logoText: propTypes.string.isRequired,
};

export default Header;
