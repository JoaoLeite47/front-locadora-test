import React from "react";
import "./FormModalClienteUpdate.css";

export default function FormModalClienteUpdate() {
  return (
    <form className="formClienteUpdate">
      <input type="text" name="rg" placeholder="RG" required />
      <input
        type="date"
        name="dt_nascimento"
        placeholder="Data de Nascimento"
        required
      />
      <input type="text" name="cnh" placeholder="CNH" required />
      <input type="text" name="nome" placeholder="Nome" required />
      <input type="text" name="endereco" placeholder="Endereço" required />
      <input type="text" name="cpf" placeholder="Cpf" required />
      <button className="update" type="submit">
        Atualizar
      </button>
    </form>
  );
}
