import React from "react";
import "./FormModalCliente.css";

export default function FormModalCliente() {
  return <form action="">
    <input type="text" name="rg" placeholder="RG" />
    <input type="date" name="dt_nascimento" placeholder="Data de Nascimento" />
    <input type="text" name="cnh" placeholder="CNH" />
    <input type="text" name="nome" placeholder="Nome" />
    <input type="text" name="endereco" placeholder="Endereço" />
    <input type="text" name="cpf" placeholder="Cpf" />
    <button className="singup" type="submit">Cadastrar</button>
  </form>
}
