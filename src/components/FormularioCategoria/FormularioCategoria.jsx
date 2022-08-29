import React, { useState } from "react";
import "./FormularioCategoria.css";

export default function FormularioCategoria({ list = [], getCategoria }) {
  const [filter, setFilter] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.cod_categ));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  const deleteCategoria = (cod_categ) => {
    fetch(`http://localhost:5000/categoria/delete/${cod_categ}`).then((res) => {
      res.json().then(() => alert("Operação Sucedida!").then(getCategoria()));
    });
  };

  return (
    <div>
      <input placeholder="Código Example: 4" onChange={handleFilter} />
      <table className="table_categoria">
        <thead>
          <tr>
            <th>Codigo da categoria</th>
            <th>Descrição</th>
            <th>Valor da diária</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ cod_categ, descricao, valor_diaria }) => {
            return (
              <>
                <tr key={cod_categ}>
                  <td>{cod_categ}</td>
                  <td>{descricao}</td>
                  <td>{valor_diaria}</td>
                  <button className="update buttonAction">Atualizar</button>
                  <button
                    className="delete buttonAction"
                    onClick={() => deleteCategoria(cod_categ)}
                  >
                    Deletar
                  </button>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
