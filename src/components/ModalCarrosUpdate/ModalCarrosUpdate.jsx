import React from "react";
import "./ModalCarrosUpdate.css";
import { ImSearch } from "react-icons/im";

export default function ModalCarrosUpdate({ onClose = () => {} }) {
  return (
    <div className="carroModalUpdate">
      <div className="carroModalUpdateContainer">
        <button className="carroModalUpdateClose" onClick={onClose} />
        <div className="carroModalUpdateContant">
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
          <div className="formUpdateCarro">
            <form>
              <input type="text" name="chassi" placeholder="Chassi" required />
              <input type="text" name="cor" placeholder="Cor" required />
              <input
                type="number"
                name="modelo"
                placeholder="Modelo"
                required
              />
              <input type="text" name="marca" placeholder="Marca" required />
              <input type="text" name="placa" placeholder="Placa" required />
              <input type="number" name="ano" placeholder="Ano" required />
              {/* <select name="categoria_fk" placeholder="Categoria" id="categoria_fk" required></select> */}
              <input
                type="number"
                name="categoria_fk"
                placeholder="Categoria"
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
