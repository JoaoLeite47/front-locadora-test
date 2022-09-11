import React from "react";
import "./ModalClienteDelete.css";

export default function ModalClienteDelete({ onClose = () => {}, cpfBase }) {
  const deleteCliente = () => {
    fetch(`http://localhost:5000/cliente/delete/${cpfBase}`).then((res) => {
      res
        .json()
        .then(() => alert("Operação sucedida"))
        .then(() => onClose());
    });
  };

  return (
    <div className="clienteModalDelete">
      <div className="clienteModalDeleteContainer">
        <button className="clienteModalDeleteClose" onClick={onClose} />
        <div className="clienteModalDeleteContant">
          <h1>Deletar: {cpfBase}</h1>
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
