import React, { useState } from "react";
import "./FormularioAlocacao.css";

export default function FormularioAlocacao({ list = [], getAlocacao }) {
  const [filter, setFilter] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.id_aloc));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  const deleteAlocacao = (id_aloc) => {
    fetch(`http://localhost:5000/alocacao/delete/${id_aloc}`).then((res) => {
      res.json().then(() => alert("Operação sucedida!").then(getAlocacao()));
    });
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
              <th>Id da alocação</th>
            </tr>
          </thead>
          <tbody>
            {list.map(
              ({ cpf_fk, chassi_fk, dt_saida, dt_entrega, id_aloc }) => {
                return (
                  <>
                    <tr key={id_aloc}>
                      <td>{cpf_fk}</td>
                      <td>{chassi_fk}</td>
                      <td>{dt_saida}</td>
                      <td>{dt_entrega}</td>
                      <td>{id_aloc}</td>
                      <button className="update buttonAction">Atualizar</button>
                      <button
                        className="delete buttonAction"
                        onClick={() => deleteAlocacao(id_aloc)}
                      >
                        Deletar
                      </button>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
