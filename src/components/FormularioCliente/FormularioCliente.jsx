import React, { useState } from "react";
import "./FormularioCliente.css";

export default function Formulario({ list = [] }) {
  const [orderColumn, setOrderColumn] = useState("nome");
  const [filter, setFilter] = useState("");

  const handleOrder = (columnName) => {
    setOrderColumn(columnName); // function to order the list by column name
  };

  list = list.sort((a, b) => {
    return a[orderColumn] > b[orderColumn] ? -1 : 1; // order for ascending or descending respectively
  });

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.cpf));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  return (
    <div>
      <input placeholder="CPF Example: 56558215225" onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>RG</th>
            <th>Data de nascimento</th>
            <th>CNH</th>
            <th onClick={() => handleOrder("nome")}>Nome</th>
            <th>Endereço</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ rg, dt_nascimento, cnh, nome, endereco, cpf }) => {
            return (
              <tr key={cpf}>
                <td>{rg}</td>
                <td>{dt_nascimento}</td>
                <td>{cnh}</td>
                <td>{nome}</td>
                <td>{endereco}</td>
                <td>{cpf}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
