import React from "react";
import "./InfoAll.css";
import InfoAllClientes from "../InfoAllClientes/InfoAllClientes";
import InfoAllCarros from "../InfoAllCarros/InfoAllCarros";
import InfoAllAlocacoes from "../InfoAllAlocacoes/InfoAllAlocacoes";
import InfoAllCategoria from "../InfoAllCategoria/InfoAllCategoria";

export default function InfoAll() {
  return (
    <div>
      <div className="Intro Introsecond">
        <div className="introContainer introContainerSecond">
          <div className="infoColumns">
            <div className="InfoColumnsItens">
              <InfoAllClientes />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllCarros />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllAlocacoes />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllCategoria />
            </div>
          </div>
        </div>
        <div className="itensContainer itensContainerSecond"></div>
      </div>
    </div>
  );
}
