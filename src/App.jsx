import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Cliente from "./components/Cliente/Cliente";
import Alocacao from "./components/Alocacao/Alocacao";
import Carros from "./components/Carros/Carros";
import Categoria from "./components/Categoria/Categoria";

function App() {
  return (
    <div className="App">
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
