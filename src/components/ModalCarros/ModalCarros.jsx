import React from "react";
import "./ModalCarros.css";
import FormModalCarros from "../FormModalCarros/FormModalCarros";

export default function ModalCarros({ onClose = () => {} }) {
  return (
    <div className="carrosModal">
      <div className="carrosModalContainer">
        <button className="carrosModalClose" onClick={onClose} />
        <div className="carrosModalContant">
          <FormModalCarros />
        </div>
      </div>
    </div>
  );
}
