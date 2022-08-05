import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Cliente from "./components/Cliente/Cliente";
import Alocacao from "./components/Alocacao/Alocacao";
import Carros from "./components/Carros/Carros";
import Categoria from "./components/Categoria/Categoria";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Cliente />
        <Alocacao />
        <Carros />
        <Categoria />
      </div>
    </div>
  );
}

export default App;
