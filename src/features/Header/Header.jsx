import React from 'react';

import HeaderView from './HeaderView';

import './Header.scss';

const Header = props => {
  const { firebase, signOut } = props;
  return <HeaderView firebase={firebase} signOut={signOut} />;
};

export default Header;
