import React from "react";
import "./ModalCategoriaUpdate.css";

export default function ModalCategoriaUpdate({ onClose = () => {} }) {
  return (
    <div className="categoriaModalUpdate">
      <div className="categoriaModalUpdateContainer">
        <button className="categoriaModalUpdateClose" onClick={onClose} />
        <div className="categoriaModalUpdateContant"></div>
      </div>
    </div>
  );
}
