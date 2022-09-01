import React from "react";
import FormModalAlocacaoUpdate from "../FormModalAlocacaoUpdate/FormModalAlocacaoUpdate";
import "./ModalAlocacaoUpdate.css";

export default function ModalAlocacaoUpdate({ onClose = () => {} }) {
  return (
    <div className="alocacaoModalUpdate">
      <div className="alocacaoModalUpdateContainer">
        <button className="alocacaoModalUpdateClose" onClick={onClose} />
        <div className="alocacaoModalUpdateContant">
          <FormModalAlocacaoUpdate />
        </div>
      </div>
    </div>
  );
}
