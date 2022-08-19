import React, { useState } from "react";
import "./FormularioAlocacao.css";

export default function FormularioAlocacao({ list = [] }) {
  const [orderColumn, setOrderColumn] = useState("id_aloc");
  const [filter, setFilter] = useState("");

  const handleOrder = (columnName) => {
    setOrderColumn(columnName); // function to order the list by column name
  };

  list = list.sort((a, b) => {
    return a[orderColumn] > b[orderColumn] ? -1 : 1; // order for ascending or descending respectively
  });

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.id_aloc));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  return (
    <div>
      <div>
        <input placeholder="Id Example: 5" onChange={handleFilter} />
        <table className="table_alocacao">
          <thead>
            <tr>
              <th>CPF</th>
              <th>CHASSI</th>
              <th>Data de saída</th>
              <th>Data de entrega</th>
              <th onClick={() => handleOrder("id_aloc")}>Id da alocação</th>
            </tr>
          </thead>
          <tbody>
            {list.map(
              ({ cpf_fk, chassi_fk, dt_saida, dt_entrega, id_aloc }) => {
                return (
                  <tr key={id_aloc}>
                    <td>{cpf_fk}</td>
                    <td>{chassi_fk}</td>
                    <td>{dt_saida}</td>
                    <td>{dt_entrega}</td>
                    <td>{id_aloc}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
