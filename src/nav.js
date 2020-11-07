import React from 'react';
import './nav.css';
import logo from './static/img/logo.png';
import department_icon from "./static/img/icons/Police-02.png";
import officer_icon from "./static/img/icons/Officer-02.png";
import average_apple_icon from "./static/img/icons/AverageAppleGreyBackground.png";


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
            <img className="department-icon" src={department_icon} alt="department icon" />
            <div className="icon-text">Departments</div>
          </a>
        </li>
        <li>
          <a className="link" href="#officers">
            <img className="officer-icon" src={officer_icon} alt="officer icon" />
            <div className="icon-text">Officers</div>
          </a>
        </li>
        <li className="right">
          <a className="link" href="#about">
            <div className="icon-text">About</div>
              <img className="apple-icon" src={average_apple_icon} alt="Average apple icon" />
          </a>
        </li>
      </ul>
    );
}

export default Nav;
