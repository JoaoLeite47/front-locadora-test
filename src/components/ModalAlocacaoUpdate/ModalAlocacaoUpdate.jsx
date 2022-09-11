import React, { useState, useEffect } from "react";
import "./ModalAlocacaoUpdate.css";

export default function ModalAlocacaoUpdate({
  onClose = () => {},
  id_alocBase,
}) {
  const [Alocacao, setAlocacao] = useState([]);
  const [cpf_fk, setCpf_fk] = useState("");
  const [chassi_fk, setChassi_fk] = useState("");
  const [dt_saida, setDt_saida] = useState("");
  const [dt_entrega, setDt_entrega] = useState("");

  const getClienteUnique = () => {
    fetch(`http://localhost:5000/alocacao/${id_alocBase}`).then(async (res) =>
      setAlocacao(await res.json())
    );
  };

  useEffect(() => {
    getClienteUnique();
  }, []);

  const submitHandler = () => {
    const data = { cpf_fk, chassi_fk, dt_saida, dt_entrega };
    try {
      fetch(`http://localhost:5000/alocacao/update/${id_alocBase}`, {
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
    <div className="alocacaoModalUpdate">
      <div className="alocacaoModalUpdateContainer">
        <button className="alocacaoModalUpdateClose" onClick={onClose} />
        <div className="alocacaoModalUpdateContant">
          {Alocacao.map(
            ({ cpf_fk, chassi_fk, dt_saida, dt_entrega, id_aloc }) => {
              return (
                <div className="formUpdateAlocacao">
                  <form onSubmit={submitHandler} key={id_aloc}>
                    <input
                      type="text"
                      name="cpf_fk"
                      placeholder="Cpf"
                      Value={cpf_fk}
                      onChange={(e) => setCpf_fk(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      name="chassi_fk"
                      placeholder="Chassi"
                      Value={chassi_fk}
                      onChange={(e) => setChassi_fk(e.target.value)}
                      required
                    />
                    <input
                      type="date"
                      name="dt_saida"
                      placeholder="Data de saída"
                      Value={dt_saida}
                      onChange={(e) => setDt_saida(e.target.value)}
                      required
                    />
                    <input
                      type="date"
                      name="dt_entrega"
                      placeholder="Data de entrega"
                      Value={dt_entrega}
                      onChange={(e) => setDt_entrega(e.target.value)}
                      required
                    />
                    <button className="update" type="submit">
                      Atualizar
                    </button>
                  </form>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
