import React, { useState, useEffect } from "react";
import "./ModalCategoriaUpdate.css";

export default function ModalCategoriaUpdate({
  onClose = () => {},
  cod_CategBase,
}) {
  const [categoria, setCategoria] = useState([]);

  const getCategoriaUnique = () => {
    fetch(`http://localhost:5000/categoria/${cod_CategBase}`).then(
      async (res) => setCategoria(await res.json())
    );
  };

  useEffect(() => {
    getCategoriaUnique();
  }, []);

  return (
    <div className="categoriaModalUpdate">
      <div className="categoriaModalUpdateContainer">
        <button className="categoriaModalUpdateClose" onClick={onClose} />
        <div className="categoriaModalUpdateContant">
          <div className="formUpdateCategoria">
            {categoria.map(({ descricao, valor_diaria }) => {
              return (
                <form>
                  <input
                    type="text"
                    name="descricao"
                    value={descricao}
                    placeholder="Descrição"
                    required
                  />
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="valor_diaria"
                    value={valor_diaria}
                    placeholder="Valor da diária"
                    required
                  />
                  <button className="update" type="submit">
                    Atualizar
                  </button>
                </form>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
