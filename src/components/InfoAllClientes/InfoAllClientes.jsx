import "./InfoAllClientes.css";
import React from "react";

export default function InfoAllClientes() {
  return (
    <div>
      <div className="BorderCircular">
        <div className="BorderCircularClientes">Clientes</div>
        <div className="BorderCircularClientes">
          <span className="BorderCircularClientesNumber">8</span>
        </div>
      </div>
    </div>
  );
}
