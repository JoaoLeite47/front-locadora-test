import React from "react";
import "./ModalAlocacaoDelete.css"

export default function ModalAlocacaoDelete({ onClose = () => {}, idAlocBase }) {
  const deleteAlocacao = () => {
    fetch(`http://localhost:5000/alocacao/delete/${idAlocBase}`).then((res) => {
      res
        .json()
        .then(() => alert("Operação sucedida"))
        .then(() => onClose());
    });
  };

  return (
    <div className="alocacaoModalDelete">
      <div className="alocacaoModalDeleteContainer">
        <button className="alocacaoModalDeleteClose" onClick={onClose} />
        <div className="alocacaoModalDeleteContant">
          <h1>Deletar: {idAlocBase}</h1>
          <div className="deleteButtons">
            <button
              className="deleteConfirm deleteOptions"
              onClick={deleteAlocacao}
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
