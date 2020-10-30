import React from 'react';
import './nav.css';
import logo from './static/img/logo.png';
import department_icon from "./static/img/icons/Police-02.png";


const Nav = () => {

    return (
      <ul className="topnav">
        <li>
          <a className="home" href="#home">
            <img className="img-responsive" src={logo} alt="logo" />
          </a>
        </li>
        <li>
          <a className="link" href="#departments">
            <img className="department-icon" src={department_icon} alt="logo" />
            <div id="department-text">Departments</div>
          </a>
        </li>
        <li className="right">
          <a class="link" href="#about">
            About
          </a>
        </li>
      </ul>
    );
}

export default Nav;
