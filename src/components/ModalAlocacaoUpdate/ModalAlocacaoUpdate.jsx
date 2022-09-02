import React from "react";
import "./ModalAlocacaoUpdate.css";
import { ImSearch } from "react-icons/im";

export default function ModalAlocacaoUpdate({ onClose = () => {} }) {
  return (
    <div className="alocacaoModalUpdate">
      <div className="alocacaoModalUpdateContainer">
        <button className="alocacaoModalUpdateClose" onClick={onClose} />
        <div className="alocacaoModalUpdateContant">
          <div className="searchColumn">
            <form className="searchForm" action="">
              <input
                type="text"
                className="searchBar"
                placeholder="digite o cpf aqui..."
              />
              <button className="SearchButton">
                <ImSearch size="1.5em" />
              </button>
            </form>
          </div>
          <div className="formUpdateAlocacao">
            <form>
              <input type="text" name="cpf_fk" placeholder="Cpf" required />
              <input
                type="text"
                name="chassi_fk"
                placeholder="Chassi"
                required
              />
              <input
                type="date"
                name="dt_saida"
                placeholder="Data de saída"
                required
              />
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
          </div>
        </div>
      </div>
    </div>
  );
}
