import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Cliente from "./components/Cliente/Cliente";
import Alocacao from "./components/Alocacao/Alocacao";
import Carros from "./components/Carros/Carros";
import Categoria from "./components/Categoria/Categoria";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Topbar />
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
