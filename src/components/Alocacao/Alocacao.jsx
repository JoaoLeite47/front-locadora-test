import "./Alocacao.css";

import React, { useState, useEffect } from "react";
import FormularioAlocacao from "../FormularioAlocacao/FormularioAlocacao";

export default function Alocacao() {
  let [list, setList] = useState([]);

  const getAlocacao = () => {
    fetch("http://localhost:5000/alocacoes").then(async (res) =>
      setList(await res.json())
    );
  };

  useEffect(() => {
    getAlocacao();
  }, []);
  return (
    <div className="alocacao" id="alocacao">
      <FormularioAlocacao list={list} />
    </div>
  );
}
