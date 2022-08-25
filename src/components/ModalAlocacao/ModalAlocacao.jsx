import React from "react";
import "./ModalAlocacao.css";

export default function ModalAlocacao({ onClose = () => {} }) {
  return (
    <div className="alocacaoModal">
      <div className="alocacaoModalContainer">
        <button className="alocacaoModalClose" onClick={onClose} />
        <div className="alocacaoModalContant">Algo</div>
      </div>
    </div>
  );
}
