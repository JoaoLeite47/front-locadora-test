import React, { useState } from "react";
import ModalAlocacaoDelete from "../ModalAlocacaoDelete/ModalAlocacaoDelete";
import ModalAlocacaoUpdate from "../ModalAlocacaoUpdate/ModalAlocacaoUpdate";
import "./FormularioAlocacao.css";

export default function FormularioAlocacao({ list = [] }) {
  const [filter, setFilter] = useState("");
  const [alocacaoUpdateModalVisible, setAlocacaoUpdateModalVisible] =
    useState(false);
  const [alocacaoDeleteModalVisible, setAlocacaoDeleteModalVisible] =
    useState(false);
  const [idAlocBase, setIdalocBase] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.id_aloc));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };

  const handleModalUpdate = (id_aloc) => {
    setAlocacaoUpdateModalVisible(true);
    setIdalocBase(id_aloc);
  };

  const handleModalDelete = (id_aloc) => {
    setAlocacaoDeleteModalVisible(true);
    setIdalocBase(id_aloc);
    console.log(id_aloc)
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
                  <tr key={id_aloc}>
                    <td>{cpf_fk}</td>
                    <td>{chassi_fk}</td>
                    <td>{dt_saida}</td>
                    <td>{dt_entrega}</td>
                    <td>{id_aloc}</td>
                    <td>
                      <button
                        className="delete buttonAction"
                        onClick={() => handleModalDelete(id_aloc)}
                      >
                        Deletar
                      </button>
                      {alocacaoDeleteModalVisible ? (
                        <ModalAlocacaoDelete
                          onClose={() => setAlocacaoDeleteModalVisible(false)}
                          idAlocBase={idAlocBase}
                        />
                      ) : null}
                    </td>
                    <td>
                      <button
                        className="update buttonAction"
                        onClick={() => handleModalUpdate(id_aloc)}
                      >
                        Atualizar
                      </button>
                      {alocacaoUpdateModalVisible ? (
                        <ModalAlocacaoUpdate
                          onClose={() => setAlocacaoUpdateModalVisible(false)}
                          idAlocBase={idAlocBase}
                        />
                      ) : null}
                    </td>
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
