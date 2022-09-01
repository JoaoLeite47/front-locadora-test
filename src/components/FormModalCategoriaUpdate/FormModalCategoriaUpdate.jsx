import React from "react";
import "./FormModalCategoriaUpdate.css"

export default function FormModalCategoriaUpdate() {
  return (
    <form className="formCategoriaUpdate">
      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        step="0.1"
        min="0"
        name="valor_diaria"
        placeholder="Valor da diária"
        required
      />
      <button className="update" type="submit">
        Atualizar
      </button>
    </form>
  );
}
