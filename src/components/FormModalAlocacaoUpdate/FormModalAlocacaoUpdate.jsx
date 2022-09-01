import React from "react";
import "./FormModalAlocacaoUpdate.css";

export default function FormModalAlocacaoUpdate() {
  return (
    <form className="formAlocacaoUpdate">
      <input type="text" name="cpf_fk" placeholder="Cpf" required />
      <input type="text" name="chassi_fk" placeholder="Chassi" required />
      <input type="date" name="dt_saida" placeholder="Data de saída" required />
      <input
        type="date"
        name="dt_entrega"
        placeholder="Data de entrega"
        required
      />
      <button className="update" type="submit">
        Atualizar
      </button>
    </form>
  );
}
