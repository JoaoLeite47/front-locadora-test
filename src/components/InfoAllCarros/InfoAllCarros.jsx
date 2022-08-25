import "./InfoAllCarros.css";
import React from "react";

export default function InfoAllCarros() {
  return (
    <div>
      <div className="BorderCircular">
        <div className="BorderCircularCarros">Carros</div>
        <div className="BorderCircularCarros">
          <span className="BorderCircularCarrosNumber">8</span>
        </div>
      </div>
    </div>
  );
}
