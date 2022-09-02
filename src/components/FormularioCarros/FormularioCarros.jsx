import React, { useState } from "react";
import "./FormularioCarros.css";

export default function FormularioCarros({ list = [] }) {
  const [filter, setFilter] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.chassi));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  const deleteCarros = (chassi) => {
    fetch(`http://localhost:5000/carro/delete/${chassi}`).then((res) => {
      res.json().then(() => alert("Operação sucedida"));
    });
  };

  return (
    <div>
      <input placeholder="Chassi Example: 458eds45yg" onChange={handleFilter} />
      <table className="table_carros">
        <thead>
          <tr>
            <th>Chassi</th>
            <th>Cor</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Placa</th>
            <th>Ano</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {list.map(
            ({ chassi, cor, modelo, marca, placa, ano, categoria_fk }) => {
              return (
                <tr key={chassi}>
                  <td>{chassi}</td>
                  <td>{cor}</td>
                  <td>{modelo}</td>
                  <td>{marca}</td>
                  <td>{placa}</td>
                  <td>{ano}</td>
                  <td>{categoria_fk}</td>
                  <td>
                    <button
                      className="delete buttonAction"
                      onClick={() => deleteCarros(chassi)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
