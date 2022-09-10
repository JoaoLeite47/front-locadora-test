import React, { useState, useEffect } from "react";
import "./ModalAlocacaoUpdate.css";

export default function ModalAlocacaoUpdate({
  onClose = () => {},
  id_alocBase,
}) {
  const [Alocacao, setAlocacao] = useState([]);

  const getClienteUnique = () => {
    fetch(`http://localhost:5000/alocacao/${id_alocBase}`).then(async (res) =>
      setAlocacao(await res.json())
    );
  };

  useEffect(() => {
    getClienteUnique();
  }, []);

  return (
    <div className="alocacaoModalUpdate">
      <div className="alocacaoModalUpdateContainer">
        <button className="alocacaoModalUpdateClose" onClick={onClose} />
        <div className="alocacaoModalUpdateContant">
          <div className="formUpdateAlocacao">
            {Alocacao.map(({ cpf_fk, chassi_fk, dt_saida, dt_entrega }) => {
              return (
                <form>
                  <input
                    type="text"
                    name="cpf_fk"
                    placeholder="Cpf"
                    value={cpf_fk}
                    required
                  />
                  <input
                    type="text"
                    name="chassi_fk"
                    placeholder="Chassi"
                    value={chassi_fk}
                    required
                  />
                  <input
                    type="date"
                    name="dt_saida"
                    placeholder="Data de saída"
                    value={dt_saida}
                    required
                  />
                  <input
                    type="date"
                    name="dt_entrega"
                    placeholder="Data de entrega"
                    value={dt_entrega}
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
