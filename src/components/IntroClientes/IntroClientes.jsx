import React, { useState } from "react";
import "./IntroClientes.css";
import { FiUser } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";
import ModalCliente from "../ModalCliente/ModalCliente";
import ModalCarros from "../ModalCarros/ModalCarros";
import ModalCategoria from "../ModalCategoria/ModalCategoria";
import ModalAlocacao from "../ModalAlocacao/ModalAlocacao";

export default function IntroClientes({ graphic = [] }) {
  const [clienteModalVisible, setClienteModalVisible] = useState(false);
  const [carrosModalVisible, setCarrosModalVisible] = useState(false);
  const [categoriaModalVisible, setCategoriaModalVisible] = useState(false);
  const [alocacaoModalVisible, setAlocacaoModalVisible] = useState(false);

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
            <button className="clientesLink">
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
                <FiUser
                  size="3em"
                  className="registration_icon"
                  onClick={() => setClienteModalVisible(true)}
                />
                <p>Clientes</p>
              </button>
              {clienteModalVisible ? (
                <ModalCliente onClose={() => setClienteModalVisible(false)} />
              ) : null}
              <button>
                <AiFillCar
                  size="3em"
                  className="registration_icon"
                  onClick={() => setCarrosModalVisible(true)}
                />
                <p>Carros</p>
              </button>
              {carrosModalVisible ? (
                <ModalCarros onClose={() => setCarrosModalVisible(false)} />
              ) : null}
              <button>
                <BiCategory
                  size="3em"
                  className="registration_icon"
                  onClick={() => setCategoriaModalVisible(true)}
                />
                <p>Categorias</p>
              </button>
              {categoriaModalVisible ? (
                <ModalCategoria
                  onClose={() => setCategoriaModalVisible(false)}
                />
              ) : null}
              <button>
                <BiDetail
                  size="3em"
                  className="registration_icon"
                  onClick={() => setAlocacaoModalVisible(true)}
                />
                <p>Alocações</p>
              </button>
              {alocacaoModalVisible ? (
                <ModalAlocacao onClose={() => setAlocacaoModalVisible(false)} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
