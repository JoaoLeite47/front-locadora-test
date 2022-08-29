import "./Cliente.css";

import React, { useState, useEffect } from "react";
import FormularioCliente from "../FormularioCliente/FormularioCliente";

export default function Cliente() {
  let [list, setList] = useState([]);

  const getCliente = () => {
    fetch("http://localhost:5000/clientes").then(async (res) =>
      setList(await res.json())
    );
  };

  useEffect(() => {
    getCliente();
  }, []);

  return (
    <div className="cliente" id="cliente">
      <FormularioCliente list={list} getCliente={getCliente()} />
    </div>
  );
}
