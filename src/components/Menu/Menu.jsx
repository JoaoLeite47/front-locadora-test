import "./Menu.css";

import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#cliente">Clientes</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#alocacao">Alocações</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#carros">Carros</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#categoria">Categorias</a>
        </li>
      </ul>
    </div>
  );
}
