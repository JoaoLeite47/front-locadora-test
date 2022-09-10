import React, { useState, useEffect } from "react";
import "./ModalCarrosUpdate.css";

export default function ModalCarrosUpdate({ onClose = () => {}, chassiBase }) {
  const [Carro, setCarro] = useState([]);

  const getClienteUnique = () => {
    fetch(`http://localhost:5000/carro/${chassiBase}`).then(async (res) =>
      setCarro(await res.json())
    );
  };

  useEffect(() => {
    getClienteUnique();
  }, []);

  return (
    <div className="carroModalUpdate">
      <div className="carroModalUpdateContainer">
        <button className="carroModalUpdateClose" onClick={onClose} />
        <div className="carroModalUpdateContant">
          <div className="formUpdateCarro">
            {Carro.map(
              ({ chassi, cor, modelo, marca, placa, ano, categoria_fk }) => {
                return (
                  <form>
                    <input
                      type="text"
                      name="chassi"
                      placeholder="Chassi"
                      value={chassi}
                      required
                    />
                    <input
                      type="text"
                      name="cor"
                      placeholder="Cor"
                      value={cor}
                      required
                    />
                    <input
                      type="number"
                      name="modelo"
                      placeholder="Modelo"
                      value={modelo}
                      required
                    />
                    <input
                      type="text"
                      name="marca"
                      placeholder="Marca"
                      value={marca}
                      required
                    />
                    <input
                      type="text"
                      name="placa"
                      placeholder="Placa"
                      value={placa}
                      required
                    />
                    <input
                      type="number"
                      name="ano"
                      placeholder="Ano"
                      value={ano}
                      required
                    />
                    {/* <select name="categoria_fk" placeholder="Categoria" id="categoria_fk" required></select> */}
                    <input
                      type="number"
                      name="categoria_fk"
                      placeholder="Categoria"
                      value={categoria_fk}
                      required
                    />
                    <button className="update" type="submit">
                      Atualizar
                    </button>
                  </form>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
