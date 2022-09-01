import React from "react";
import FormModalCategoriaUpdate from "../FormModalCategoriaUpdate/FormModalCategoriaUpdate";
import "./ModalCategoriaUpdate.css";

export default function ModalCategoriaUpdate({ onClose = () => {} }) {
  return (
    <div className="categoriaModalUpdate">
      <div className="categoriaModalUpdateContainer">
        <button className="categoriaModalUpdateClose" onClick={onClose} />
        <div className="categoriaModalUpdateContant">
          <FormModalCategoriaUpdate />
        </div>
      </div>
    </div>
  );
}
