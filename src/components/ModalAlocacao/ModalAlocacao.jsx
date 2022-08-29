import React from "react";
import "./ModalAlocacao.css";
import FormModalAlocacao from "../FormModalAlocacao/FormModalAlocacao";

export default function ModalAlocacao({ onClose = () => {} }) {
  return (
    <div className="alocacaoModal">
      <div className="alocacaoModalContainer">
        <button className="alocacaoModalClose" onClick={onClose} />
        <div className="alocacaoModalContant">
          <FormModalAlocacao />
        </div>
      </div>
    </div>
  );
}
