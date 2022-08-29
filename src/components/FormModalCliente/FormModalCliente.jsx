import React from "react";
import "./FormModalCliente.css";

export default function FormModalCliente() {
  return (
    <form action="">
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
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
