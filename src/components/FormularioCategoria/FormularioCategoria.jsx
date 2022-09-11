import React, { useState } from "react";
import "./FormularioCategoria.css";
import ModalCategoriaUpdate from "../ModalCategoriaUpdate/ModalCategoriaUpdate";
import ModalCategoriaDelete from "../ModalCategoriaDelete/ModalCategoriaDelete";

export default function FormularioCategoria({ list = [] }) {
  const [filter, setFilter] = useState("");
  const [categoriaUpdateModalVisible, setCategoriaUpdateModalVisible] =
    useState(false);
  const [categoriaDeleteModalVisible, setCategoriaDeleteModalVisible] =
    useState(false);
  const [cod_CategBase, setCod_CategBase] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.cod_categ));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  const handleModalUpdate = (cod_categ) => {
    setCategoriaUpdateModalVisible(true);
    setCod_CategBase(cod_categ);
  };

  const handleModalDelete = (cod_categ) => {
    setCategoriaDeleteModalVisible(true);
    setCod_CategBase(cod_categ);
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
              <tr key={cod_categ}>
                <td>{cod_categ}</td>
                <td>{descricao}</td>
                <td>{valor_diaria}</td>
                <td>
                  <button
                    className="delete buttonAction"
                    onClick={() => handleModalDelete(cod_categ)}
                  >
                    Deletar
                  </button>
                  {categoriaDeleteModalVisible ? (
                    <ModalCategoriaDelete
                      onClose={() => setCategoriaDeleteModalVisible(false)}
                      cod_CategBase={cod_CategBase}
                    />
                  ) : null}
                </td>
                <td>
                  <button
                    className="update buttonAction"
                    onClick={() => handleModalUpdate(cod_categ)}
                  >
                    Atualizar
                  </button>
                  {categoriaUpdateModalVisible ? (
                    <ModalCategoriaUpdate
                      onClose={() => setCategoriaUpdateModalVisible(false)}
                      cod_CategBase={cod_CategBase}
                    />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
