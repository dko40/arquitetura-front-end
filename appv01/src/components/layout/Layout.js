import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from './logo.png';

const Layout = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="logo"></img>
        <ul className="menu">
          <li className="item-menu"><Link to="/">Home</Link></li>
          <li className="item-menu"><Link to="/quem-somos">Quem somos</Link></li>
          <li className="item-menu"><Link to="/contact">Contato</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;