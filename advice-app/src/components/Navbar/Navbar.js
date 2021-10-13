import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { NavbarMenuList } from './NavbarMenuList';

export default function Navbar() {
  //state for the hamburger menu bars
  const [clicked, setClicked] = useState(false);

  //mapping through the MenuList object to display link into the nav bar
  const navBarMenuList = NavbarMenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link exact to={url} activeClassName="active">
          {title}
        </Link>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h2 className="logoOne">ADVICE</h2>
        </Link>
        <Link to="/">
          <h2 className="logoTwo">FACTORY</h2>
        </Link>
      </div>
      <nav>
        <div className="menuIcon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'menu' : 'menu close'}>{navBarMenuList}</ul>
      </nav>
    </header>
  );
}
