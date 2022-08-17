import "./Cliente.css";

import React, { useState, useEffect } from "react";
import Formulario from "../FormularioCliente/Formulario";

export default function Cliente() {
  let [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clientes").then(async (res) =>
      setList(await res.json())
    );
  }, []);

  return (
    <div className="cliente" id="cliente">
      <Formulario list={list} />
    </div>
  );
}
