import React from "react";
import "./ModalCarrosUpdate.css";

export default function ModalCarrosUpdate({ onClose = () => {} }) {
  return (
    <div className="carroModalUpdate">
      <div className="carroModalUpdateContainer">
        <button className="carroModalUpdateClose" onClick={onClose} />
        <div className="carroModalUpdateContant"></div>
      </div>
    </div>
  );
}
