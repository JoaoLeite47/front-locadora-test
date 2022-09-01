import React from "react";
import "./FormModalCarrosUpdate.css";

export default function FormModalCarrosUpdate() {
  return (
    <form className="formCarrosUpdate">
      <input type="text" name="chassi" placeholder="Chassi" required />
      <input type="text" name="cor" placeholder="Cor" required />
      <input type="number" name="modelo" placeholder="Modelo" required />
      <input type="text" name="marca" placeholder="Marca" required />
      <input type="text" name="placa" placeholder="Placa" required />
      <input type="number" name="ano" placeholder="Ano" required />
      {/* <select name="categoria_fk" placeholder="Categoria" id="categoria_fk" required></select> */}
      <input
        type="number"
        name="categoria_fk"
        placeholder="Categoria"
        required
      />
      <button className="update" type="submit">
        Atualizar
      </button>
    </form>
  );
}
