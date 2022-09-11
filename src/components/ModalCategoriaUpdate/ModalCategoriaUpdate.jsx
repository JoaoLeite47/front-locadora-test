import React, { useState, useEffect } from "react";
import "./ModalCategoriaUpdate.css";

export default function ModalCategoriaUpdate({
  onClose = () => {},
  cod_CategBase,
}) {
  const [categoria, setCategoria] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [valor_diaria, setValor_diaria] = useState("");

  const getCategoriaUnique = () => {
    fetch(`http://localhost:5000/categoria/${cod_CategBase}`).then(
      async (res) => setCategoria(await res.json())
    );
  };

  useEffect(() => {
    getCategoriaUnique();
  }, []);

  const submitHandler = () => {
    const data = { descricao, valor_diaria };
    try {
      fetch(`http://localhost:5000/categoria/update/${cod_CategBase}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        alert("Operação concluida!");
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="categoriaModalUpdate">
      <div className="categoriaModalUpdateContainer">
        <button className="categoriaModalUpdateClose" onClick={onClose} />
        <div className="categoriaModalUpdateContant">
          {categoria.map(({ descricao, valor_diaria }) => {
            return (
              <div className="formUpdateCategoria">
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    name="descricao"
                    Value={descricao}
                    onChange={(e) => {
                      setDescricao(e.target.value);
                    }}
                    placeholder="Descrição"
                    required
                  />
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="valor_diaria"
                    Value={valor_diaria}
                    onChange={(e) => {
                      setValor_diaria(e.target.value);
                    }}
                    placeholder="Valor da diária"
                    required
                  />
                  <button className="update" type="submit">
                    Atualizar
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
