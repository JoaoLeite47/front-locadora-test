import React from "react";
import "./IntroClientes.css";

export default function IntroClientes() {
  return (
    <div>
      <div className="Intro">
        <div className="introContainer">
          <div className="esquerda">
            <p>Bem vindo!</p>
            <p className="subTitle">App de testes versão 1</p>
            <p>
              Nós temos <span>92</span> clientes Incríveis!
            </p>
            <button>Clientes</button>
          </div>
          <div className="direita">
            <p className="graphic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              facere eveniet, harum cupiditate alias eius porro accusamus optio
              animi omnis rem possimus ad quidem quod, cumque debitis quisquam
              voluptatum itaque.
            </p>
          </div>
        </div>
        <div className="itensContainer">
          <div className="toptitle">
            <p>Cadastro</p>
          </div>
          <div className="cadastros">
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
