import React from "react";
import "./ModalCarros.css";

export default function ModalCarros({ onClose = () => {} }) {
  return (
    <div className="carrosModal">
      <div className="carrosModalContainer">
        <button className="carrosModalClose" onClick={onClose} />
        <div className="carrosModalContant">Algo</div>
      </div>
    </div>
  );
}
