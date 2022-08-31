import React from "react";

export default function FormModalCategoria() {

  return (
    <form>
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
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
