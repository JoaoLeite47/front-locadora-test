import React from "react";
import "./ModalClienteUpdate.css"

export default function ModalClienteUpdate({ onClose = () => {} }) {
  return (
    <div className="clienteModalUpdate">
      <div className="clienteModalUpdateContainer">
        <button className="clienteModalUpdateClose" onClick={onClose} />
        <div className="clienteModalUpdateContant">
          {/* <FormModalCliente /> */}
        </div>
      </div>
    </div>
  );
}
