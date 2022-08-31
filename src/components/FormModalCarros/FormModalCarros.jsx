import React, { useState } from "react";

export default function FormModalCarros() {
  const [chassi, setChassi] = useState("");
  const [cor, setCor] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [categoria_fk, setCategoria_fk] = useState("");

  const submitHandler = () => {
    const data = { chassi, cor, modelo, marca, placa, ano, categoria_fk };
    try {
      fetch("http://localhost:5000/carro/novo", {
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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="chassi"
        value={chassi}
        onChange={(e) => {
          setChassi(e.target.value);
        }}
        placeholder="Chassi"
        required
      />
      <input
        type="text"
        name="cor"
        value={cor}
        onChange={(e) => {
          setCor(e.target.value);
        }}
        placeholder="Cor"
        required
      />
      <input
        type="number"
        name="modelo"
        value={modelo}
        onChange={(e) => {
          setModelo(e.target.value);
        }}
        placeholder="Modelo"
        required
      />
      <input
        type="text"
        name="marca"
        value={marca}
        onChange={(e) => {
          setMarca(e.target.value);
        }}
        placeholder="Marca"
        required
      />
      <input
        type="text"
        name="placa"
        value={placa}
        onChange={(e) => {
          setPlaca(e.target.value);
        }}
        placeholder="Placa"
        required
      />
      <input
        type="number"
        name="ano"
        value={ano}
        onChange={(e) => {
          setAno(e.target.value);
        }}
        placeholder="Ano"
        required
      />
      {/* <select name="categoria_fk" placeholder="Categoria" id="categoria_fk" required></select> */}
      <input
        type="number"
        name="categoria_fk"
        value={categoria_fk}
        onChange={(e) => {
          setCategoria_fk(e.target.value);
        }}
        placeholder="Categoria"
        required
      />
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
