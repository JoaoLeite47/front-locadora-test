import React from "react";
import "./ModalClienteUpdate.css";
import { ImSearch } from "react-icons/im";
export default function ModalClienteUpdate({ onClose = () => {} }) {
  return (
    <div className="clienteModalUpdate">
      <div className="clienteModalUpdateContainer">
        <button className="clienteModalUpdateClose" onClick={onClose} />
        <div className="clienteModalUpdateContant">
          <div className="searchColumn">
            <input
              type="text"
              className="searchBar"
              placeholder="digite o cpf aqui..."
            />
            <button className="SearchButton">
              <ImSearch size="1.5em" />
            </button>
          </div>
          <div className="formUpdateCliente">
            <form>
              <input type="text" name="rg" placeholder="RG" required />
              <input
                type="date"
                name="dt_nascimento"
                placeholder="Data de Nascimento"
                required
              />
              <input type="text" name="cnh" placeholder="CNH" required />
              <input type="text" name="nome" placeholder="Nome" required />
              <input
                type="text"
                name="endereco"
                placeholder="Endereço"
                required
              />
              <input type="text" name="cpf" placeholder="Cpf" required />
              <button className="update" type="submit">
                Atualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
