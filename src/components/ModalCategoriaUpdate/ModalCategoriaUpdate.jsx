import React from "react";
import "./ModalCategoriaUpdate.css";
import { ImSearch } from "react-icons/im";

export default function ModalCategoriaUpdate({ onClose = () => {} }) {
  return (
    <div className="categoriaModalUpdate">
      <div className="categoriaModalUpdateContainer">
        <button className="categoriaModalUpdateClose" onClick={onClose} />
        <div className="categoriaModalUpdateContant">
          <div className="searchColumn">
            <form className="searchForm" action="">
              <input
                type="text"
                className="searchBar"
                placeholder="digite o id aqui..."
              />
              <button className="SearchButton">
                <ImSearch size="1.5em" />
              </button>
            </form>
          </div>
          <div className="formUpdateCategoria">
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
