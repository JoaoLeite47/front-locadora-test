import "./InfoAllCategoria.css";
import React from "react";

export default function InfoAllCategoria({ categoria = [] }) {
  return (
    <div>
      <div className="BorderCircular">
        <div className="BorderCircularCategoria">Categorias</div>
        <div className="BorderCircularCategoria">
          <span className="BorderCircularCategoriaNumber">
            {categoria.length}
          </span>
        </div>
      </div>
    </div>
  );
}
