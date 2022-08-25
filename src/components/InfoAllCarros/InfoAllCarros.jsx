import "./InfoAllCarros.css";
import React from "react";

export default function InfoAllCarros({ carros = [] }) {
  return (
    <div>
      <div className="BorderCircular">
        <div className="BorderCircularCarros">Carros</div>
        <div className="BorderCircularCarros">
          <span className="BorderCircularCarrosNumber">{carros.length}</span>
        </div>
      </div>
    </div>
  );
}
