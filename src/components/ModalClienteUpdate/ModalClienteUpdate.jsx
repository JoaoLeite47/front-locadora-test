import React from "react";
import FormModalClienteUpdate from "../FormModalClienteUpdate/FormModalClienteUpdate";
import "./ModalClienteUpdate.css";

export default function ModalClienteUpdate({ onClose = () => {} }) {
  return (
    <div className="clienteModalUpdate">
      <div className="clienteModalUpdateContainer">
        <button className="clienteModalUpdateClose" onClick={onClose} />
        <div className="clienteModalUpdateContant">
          <FormModalClienteUpdate />
        </div>
      </div>
    </div>
  );
}
