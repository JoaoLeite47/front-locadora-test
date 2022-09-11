import React, { useState } from "react";
import ModalCarroDelete from "../ModalCarroDelete/ModalCarroDelete";
import ModalCarrosUpdate from "../ModalCarrosUpdate/ModalCarrosUpdate";
import "./FormularioCarros.css";

export default function FormularioCarros({ list = [] }) {
  const [filter, setFilter] = useState("");
  const [carroUpdateModalVisible, setCarroUpdateModalVisible] = useState(false);
  const [carroDeleteModalVisible, setCarroDeleteModalVisible] = useState(false);
  const [chassiBase, setChassiBase] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    list = list.filter((item) => exp.test(item.chassi));
  }

  const handleModal = (chassi) => {
    setCarroUpdateModalVisible(true);
    setChassiBase(chassi);
  };

  const handleModalDelete = (chassi) => {
    setCarroDeleteModalVisible(true);
    setChassiBase(chassi);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
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
                      onClick={() => handleModalDelete(chassi)}
                    >
                      Deletar
                    </button>
                    {carroDeleteModalVisible ? (
                      <ModalCarroDelete
                        onClose={() => setCarroDeleteModalVisible(false)}
                        chassiBase={chassiBase}
                      />
                    ) : null}
                  </td>
                  <td>
                    <button
                      className="update buttonAction"
                      onClick={() => handleModal(chassi)}
                    >
                      Atualizar
                    </button>
                    {carroUpdateModalVisible ? (
                      <ModalCarrosUpdate
                        onClose={() => setCarroUpdateModalVisible(false)}
                        chassiBase={chassiBase}
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
  );
}
