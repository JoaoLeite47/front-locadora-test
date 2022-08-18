import "./Carros.css";

import React, { useEffect, useState } from "react";
import FormularioCarro from "../FormularioCarros/FormularioCarros";

export default function Carros() {
  let [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carros").then(async (res) =>
      setList(await res.json())
    );
  }, []);

  return (
    <div className="carros" id="carros">
      <FormularioCarro list={list} />
    </div>
  );
}
