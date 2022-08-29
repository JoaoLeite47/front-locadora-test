import React from "react";
import "./ModalCategoria.css";
import FormModalCategoria from "../FormModalCategoria/FormModalCategoria";

export default function ModalCategoria({ onClose = () => {} }) {
  return (
    <div className="categoriaModal">
      <div className="categoriaModalContainer">
        <button className="categoriaModalClose" onClick={onClose} />
        <div className="categoriaModalContant">
          <FormModalCategoria />
        </div>
      </div>
    </div>
  );
}
