import React from 'react';
import { NavBar, Logo, Menu } from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Header = (props) => (
  <>
    <NavBar>
      <a href="/">
        <Logo alt="logo" src={logo} />
      </a>
      <a href="/menu">
        <Menu alt="menu" src={menu} {...props} />
      </a>
    </NavBar>
  </>
);

export default Header;
