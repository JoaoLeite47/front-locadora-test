import React, { useState } from "react";

export default function FormModalCarros() {
  const [newChassi, setNewChassi] = useState("");
  const [Newcor, setNewCor] = useState("");
  const [Newmodelo, setNewModelo] = useState("");
  const [Newmarca, setNewMarca] = useState("");
  const [Newplaca, setNewPlaca] = useState("");
  const [Newano, setNewAno] = useState("");
  const [Newcategoria_fk, setNewCategoria_fk] = useState("");

  const submitHandler = () => {
    const dataCreateCarros = {
      chassi: newChassi,
      cor: Newcor,
      modelo: Newmodelo,
      marca: Newmarca,
      placa: Newplaca,
      ano: Newano,
      categoria_fk: Newcategoria_fk,
    };
    try {
      fetch("http://localhost:5000/carro/novo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCreateCarros),
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
        value={newChassi}
        onChange={(e) => {
          setNewChassi(e.target.value);
        }}
        placeholder="Chassi"
        required
      />
      <input
        type="text"
        name="cor"
        value={Newcor}
        onChange={(e) => {
          setNewCor(e.target.value);
        }}
        placeholder="Cor"
        required
      />
      <input
        type="number"
        name="modelo"
        value={Newmodelo}
        onChange={(e) => {
          setNewModelo(e.target.value);
        }}
        placeholder="Modelo"
        required
      />
      <input
        type="text"
        name="marca"
        value={Newmarca}
        onChange={(e) => {
          setNewMarca(e.target.value);
        }}
        placeholder="Marca"
        required
      />
      <input
        type="text"
        name="placa"
        value={Newplaca}
        onChange={(e) => {
          setNewPlaca(e.target.value);
        }}
        placeholder="Placa"
        required
      />
      <input
        type="number"
        name="ano"
        value={Newano}
        onChange={(e) => {
          setNewAno(e.target.value);
        }}
        placeholder="Ano"
        required
      />
      {/* <select name="categoria_fk" placeholder="Categoria" id="categoria_fk" required></select> */}
      <input
        type="number"
        name="categoria_fk"
        value={Newcategoria_fk}
        onChange={(e) => {
          setNewCategoria_fk(e.target.value);
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
