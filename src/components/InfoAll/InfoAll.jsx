import React, { useEffect, useState } from "react";
import "./InfoAll.css";
import InfoAllClientes from "../InfoAllClientes/InfoAllClientes";
import InfoAllCarros from "../InfoAllCarros/InfoAllCarros";
import InfoAllAlocacoes from "../InfoAllAlocacoes/InfoAllAlocacoes";
import InfoAllCategoria from "../InfoAllCategoria/InfoAllCategoria";

export default function InfoAll() {
  let [cliente, setCliente] = useState([]);
  let [alocacao, setAlocacao] = useState([]);
  let [carros, setCarros] = useState([]);
  let [categoria, setCategoria] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clientes").then(async (res) =>
      setCliente(await res.json())
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/alocacoes").then(async (res) =>
      setAlocacao(await res.json())
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/carros").then(async (res) =>
      setCarros(await res.json())
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/categorias").then(async (res) =>
      setCategoria(await res.json())
    );
  }, []);
  return (
    <div>
      <div className="Intro Introsecond">
        <div className="introContainer introContainerSecond">
          <div className="infoColumns">
            <div className="InfoColumnsItens">
              <InfoAllClientes cliente={cliente} />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllCarros carros={carros} />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllAlocacoes alocacao={alocacao} />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllCategoria categoria={categoria} />
            </div>
          </div>
        </div>
        <div className="itensContainer itensContainerSecond">
        </div>
      </div>
    </div>
  );
}
