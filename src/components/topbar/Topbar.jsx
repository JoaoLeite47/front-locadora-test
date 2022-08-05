import "./Topbar.css";

import React from "react";

export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " +(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            LocaMil
          </a>
        </div>
        <div className="right">
          <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
