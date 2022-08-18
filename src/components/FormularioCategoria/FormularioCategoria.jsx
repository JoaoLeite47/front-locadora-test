import React, { useState } from "react";
import "./FormularioCategoria.css";

export default function FormularioCategoria({ list = [] }) {
  const [orderColumn, setOrderColumn] = useState("cod_categ");
  const [filter, setFilter] = useState("");

  const handleOrder = (columnCode) => {
    setOrderColumn(columnCode); // function to order the list by column code
  };

  list = list.sort((a, b) => {
    return a[orderColumn] > b[orderColumn] ? -1 : 1; // order for ascending or descending respectively
  });

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.cod_categ));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  return (
    <div>
      <input placeholder="Código Example: 4" onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleOrder("cod_categ")}>Codigo da categoria</th>
            <th>Descrição</th>
            <th>Valor da diária</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ cod_categ, descricao, valor_diaria }) => {
            return (
              <tr key={cod_categ}>
                <td>{cod_categ}</td>
                <td>{descricao}</td>
                <td>{valor_diaria}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
