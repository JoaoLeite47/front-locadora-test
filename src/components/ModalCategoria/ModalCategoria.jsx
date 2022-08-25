import React from "react";
import "./ModalCategoria.css";

export default function ModalCategoria({ onClose = () => {} }) {
  return (
    <div className="categoriaModal">
      <div className="categoriaModalContainer">
        <button className="categoriaModalClose" onClick={onClose} />
        <div className="categoriaModalContant">Algo</div>
      </div>
    </div>
  );
}
