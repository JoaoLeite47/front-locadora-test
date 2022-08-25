import "./InfoAllClientes.css";
import React from "react";

export default function InfoAllClientes({ cliente = [] }) {
  return (
    <div>
      <div className="BorderCircular">
        <div className="BorderCircularClientes">Clientes</div>
        <div className="BorderCircularClientes">
          <span className="BorderCircularClientesNumber">{cliente.length}</span>
        </div>
      </div>
    </div>
  );
}
