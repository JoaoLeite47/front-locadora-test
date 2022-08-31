import "./Categoria.css";

import React, { useEffect, useState } from "react";
import FormularioCategoria from "../FormularioCategoria/FormularioCategoria";

export default function Categoria() {
  let [list, setList] = useState([]);

  const getCategoria = () => {
    fetch("http://localhost:5000/categorias").then(async (res) =>
      setList(await res.json())
    );
  };

  useEffect(() => {
    getCategoria();
  }, []);
  return (
    <div className="categoria" id="categoria">
      <FormularioCategoria list={list} />
    </div>
  );
}
