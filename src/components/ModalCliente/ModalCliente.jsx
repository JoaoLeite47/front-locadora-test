import React from "react";
import "./ModalCliente.css";

export default function ModalCliente({ onClose = () => {} }) {
  return (
    <div className="clienteModal">
      <div className="clienteModalContainer">
        <button className="clienteModalClose" onClick={onClose} />
        <div className="clienteModalContant">Algo</div>
      </div>
    </div>
  );
}
