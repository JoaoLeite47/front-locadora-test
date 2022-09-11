import React from 'react'
import "./ModalCarroDelete.css"

export default function ModalCarroDelete({ onClose = () => {}, chassiBase }) {
  const deleteCliente = () => {
    fetch(`http://localhost:5000/carro/delete/${chassiBase}`).then((res) => {
      res
        .json()
        .then(() => alert("Operação sucedida"))
        .then(() => onClose());
    });
  };

  return (
    <div className="carroModalDelete">
      <div className="carroModalDeleteContainer">
        <button className="carroModalDeleteClose" onClick={onClose} />
        <div className="carroModalDeleteContant">
          <h1>Deletar: {chassiBase}</h1>
          <div className="deleteButtons">
            <button
              className="deleteConfirm deleteOptions"
              onClick={deleteCliente}
            >
              Confirmar
            </button>
            <button className="deleteCancel deleteOptions" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
