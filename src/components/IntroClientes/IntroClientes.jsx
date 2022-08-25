import React from "react";
import "./IntroClientes.css";
import { FiUser } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";

export default function IntroClientes({ graphic = [] }) {
  return (
    <div>
      <div className="Intro">
        <div className="introContainer">
          <div className="left">
            <p>Bem vindo!</p>
            <p className="subTitle">App de testes versão 1</p>
            <p>
              Nós temos <span>{graphic.length}</span> clientes Incríveis!
            </p>
            <button>
              <a href="#cliente">Clientes</a>
            </button>
          </div>
          <div className="right">
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
              <button>
                <FiUser size="3em" className="registration_icon" />
                <p>Clientes</p>
              </button>
              <button>
                <AiFillCar size="3em" className="registration_icon" />
                <p>Carros</p>
              </button>
              <button>
                <BiCategory size="3em" className="registration_icon" />
                <p>Categorias</p>
              </button>
              <button>
                <BiDetail size="3em" className="registration_icon" />
                <p>Alocações</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
