import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import "../assets/css/Header.css";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="header__wrapper" id="header__wrapper">
        <div className="header__logo">
          <NavLink to="/" className="header__logo">
            <h1>HOME</h1>
          </NavLink>
        </div>
        <div className="header__middle">
          <h1>THE 16TH SET</h1>
        </div>
        <div className="header__right">
          <RiSearchLine className="header__icon" />
        </div>
      </div>
    </div>
  );
}
