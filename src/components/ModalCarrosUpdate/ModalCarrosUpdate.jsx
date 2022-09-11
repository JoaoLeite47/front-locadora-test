import React, { useState, useEffect } from "react";
import "./ModalCarrosUpdate.css";

export default function ModalCarrosUpdate({ onClose = () => {}, chassiBase }) {
  const [Carro, setCarro] = useState([]);
  const [cor, setCor] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [categoria_fk, setCategoria_fk] = useState("");

  const getClienteUnique = () => {
    fetch(`http://localhost:5000/carro/${chassiBase}`).then(async (res) =>
      setCarro(await res.json())
    );
  };

  useEffect(() => {
    getClienteUnique();
  }, []);

  const submitHandler = () => {
    const data = { cor, modelo, marca, placa, ano, categoria_fk };
    try {
      fetch(`http://localhost:5000/carro/update/${chassiBase}`, {
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
    <div className="carroModalUpdate">
      <div className="carroModalUpdateContainer">
        <button className="carroModalUpdateClose" onClick={onClose} />
        <div className="carroModalUpdateContant">
          {Carro.map(({ cor, modelo, marca, placa, ano, categoria_fk }) => {
            return (
              <div className="formUpdateCarro">
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    name="cor"
                    placeholder="Cor"
                    Value={cor}
                    onChange={(e) => {
                      setCor(e.target.value);
                    }}
                    required
                  />
                  <input
                    type="number"
                    name="modelo"
                    placeholder="Modelo"
                    Value={modelo}
                    onChange={(e) => {
                      setModelo(e.target.value);
                    }}
                    required
                  />
                  <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    Value={marca}
                    onChange={(e) => {
                      setMarca(e.target.value);
                    }}
                    required
                  />
                  <input
                    type="text"
                    name="placa"
                    placeholder="Placa"
                    Value={placa}
                    onChange={(e) => {
                      setPlaca(e.target.value);
                    }}
                    required
                  />
                  <input
                    type="number"
                    name="ano"
                    placeholder="Ano"
                    Value={ano}
                    onChange={(e) => {
                      setAno(e.target.value);
                    }}
                    required
                  />
                  {/* <select name="categoria_fk" placeholder="Categoria" id="categoria_fk" required></select> */}
                  <input
                    type="number"
                    name="categoria_fk"
                    placeholder="Categoria"
                    Value={categoria_fk}
                    onChange={(e) => {
                      setCategoria_fk(e.target.value);
                    }}
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
