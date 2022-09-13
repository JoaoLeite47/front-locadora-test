import React from "react";
import "./ModalCategoriaDelete.css";

export default function ModalCategoriaDelete({
  onClose = () => {},
  cod_CategBase,
}) {
  const deleteCliente = () => {
    fetch(`http://localhost:5000/cliente/delete/${cod_CategBase}`).then(
      (res) => {
        res
          .json()
          .then(() => alert("Operação sucedida"))
          .then(() => onClose());
      }
    );
  };

  return (
    <div className="categoriaModalDelete">
      <div className="categoriaModalDeleteContainer">
        <button className="categoriaModalDeleteClose" onClick={onClose} />
        <div className="categoriaModalDeleteContant">
          <h1>Deletar Id: {cod_CategBase}?</h1>
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
