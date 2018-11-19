import React from 'react';
import Logo from './logo';
import ShopByCategory from './category';
import SearchBar from './searchbar/';
import Navigation from './navigation';

import './header.scss';
import './header-dropdown.scss';

const Header = () => (
  <div className="head-wrapper">
    <header className="header">
      <Logo />
      <ShopByCategory />
      <SearchBar />
      <Navigation />
    </header>
  </div>
);

export default Header;
