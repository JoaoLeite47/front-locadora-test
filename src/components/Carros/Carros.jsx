import "./Carros.css";

import React, { useEffect, useState } from "react";
import FormularioCarro from "../FormularioCarros/FormularioCarros";

export default function Carros() {
  let [list, setList] = useState([]);

  const getCarros = () => {
    fetch("http://localhost:5000/carros").then(async (res) =>
      setList(await res.json())
    );
  };

  useEffect(() => {
    getCarros();
  }, []);

  return (
    <div className="carros" id="carros">
      <FormularioCarro list={list} getCarros={getCarros()} />
    </div>
  );
}
