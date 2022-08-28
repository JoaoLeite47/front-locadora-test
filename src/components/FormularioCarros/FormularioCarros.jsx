import React, { useState } from "react";
import "./FormularioCarros.css";

export default function FormularioCarros({ list = [] }) {
  const [orderColumn, setOrderColumn] = useState("chassi");
  const [filter, setFilter] = useState("");

  const handleOrder = (columnName) => {
    setOrderColumn(columnName); // function to order the list by column name
  };

  list = list.sort((a, b) => {
    return a[orderColumn] > b[orderColumn] ? -1 : 1; // order for ascending or descending respectively
  });

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.chassi));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  return (
    <div>
      <input placeholder="Chassi Example: 458eds45yg" onChange={handleFilter} />
      <table className="table_carros">
        <thead>
          <tr>
            <th onClick={() => handleOrder("chassi")}>Chassi</th>
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
                <>
                  <tr key={chassi}>
                    <td>{chassi}</td>
                    <td>{cor}</td>
                    <td>{modelo}</td>
                    <td>{marca}</td>
                    <td>{placa}</td>
                    <td>{ano}</td>
                    <td>{categoria_fk}</td>
                    <button className="update buttonAction">Atualizar</button>
                    <button className="delete buttonAction">Deletar</button>
                  </tr>
                </>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
