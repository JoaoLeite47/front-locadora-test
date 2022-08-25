import "./InfoAllAlocacoes.css";
import React from "react";

export default function InfoAllAlocacoes({ alocacao = [] }) {
  return (
    <div>
      <div className="BorderCircular">
        <div className="BorderCircularAlocacao">Alocações</div>
        <div className="BorderCircularAlocacao">
          <span className="BorderCircularAlocacaoNumber">
            {alocacao.length}
          </span>
        </div>
      </div>
    </div>
  );
}
