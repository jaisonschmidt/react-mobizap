import React from 'react';

import HeaderView from './HeaderView';

import './Header.scss';

const Header = props => {
  const { firebase } = props;
  return <HeaderView firebase={firebase} />;
};

export default Header;
