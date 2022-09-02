import React, { useEffect, useState } from "react";
import "./InfoAll.css";
import InfoAllClientes from "../InfoAllClientes/InfoAllClientes";
import InfoAllCarros from "../InfoAllCarros/InfoAllCarros";
import InfoAllAlocacoes from "../InfoAllAlocacoes/InfoAllAlocacoes";
import InfoAllCategoria from "../InfoAllCategoria/InfoAllCategoria";
import ModalClienteUpdate from "../ModalClienteUpdate/ModalClienteUpdate";
import ModalCarrosUpdate from "../ModalCarrosUpdate/ModalCarrosUpdate";
import ModalCategoriaUpdate from "../ModalCategoriaUpdate/ModalCategoriaUpdate";
import ModalAlocacaoUpdate from "../ModalAlocacaoUpdate/ModalAlocacaoUpdate";
import { FiUser } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";

export default function InfoAll() {
  let [cliente, setCliente] = useState([]);
  let [alocacao, setAlocacao] = useState([]);
  let [carros, setCarros] = useState([]);
  let [categoria, setCategoria] = useState([]);
  const [clienteModalUpdateVisible, setClienteModalUpdateVisible] =
    useState(false);
  const [carroModalUpdateVisible, setCarroModalUpdateVisible] = useState(false);
  const [categoriaModalUpdateVisible, setCategoriaModalUpdateVisible] =
    useState(false);
  const [alocacaoModalUpdateVisible, setAlocacaoModalUpdateVisible] =
    useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/clientes").then(async (res) =>
      setCliente(await res.json())
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/alocacoes").then(async (res) =>
      setAlocacao(await res.json())
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/carros").then(async (res) =>
      setCarros(await res.json())
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/categorias").then(async (res) =>
      setCategoria(await res.json())
    );
  }, []);
  return (
    <div>
      <div className="Intro Introsecond">
        <div className="introContainer introContainerSecond">
          <div className="infoColumns">
            <div className="InfoColumnsItens">
              <InfoAllClientes cliente={cliente} />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllCarros carros={carros} />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllAlocacoes alocacao={alocacao} />
            </div>
            <div className="InfoColumnsItens">
              <InfoAllCategoria categoria={categoria} />
            </div>
          </div>
        </div>
        <div className="itensContainer itensContainerSecond">
          <div className="toptitleUpdate">
            <p>Atualizar</p>
          </div>
          <div className="Update">
            <div>
              <button>
                <FiUser
                  size="3em"
                  className="update_icon"
                  onClick={() => setClienteModalUpdateVisible(true)}
                />
                <p>Clientes</p>
              </button>
              {clienteModalUpdateVisible ? (
                <ModalClienteUpdate
                  onClose={() => setClienteModalUpdateVisible(false)}
                />
              ) : null}
              <button>
                <AiFillCar
                  size="3em"
                  className="update_icon"
                  onClick={() => setCarroModalUpdateVisible(true)}
                />
                <p>Carros</p>
              </button>
              {carroModalUpdateVisible ? (
                <ModalCarrosUpdate
                  onClose={() => setCarroModalUpdateVisible(false)}
                />
              ) : null}
              <button>
                <BiCategory
                  size="3em"
                  className="update_icon"
                  onClick={() => setCategoriaModalUpdateVisible(true)}
                />
                <p>Categorias</p>
              </button>
              {categoriaModalUpdateVisible ? (
                <ModalCategoriaUpdate
                  onClose={() => setCategoriaModalUpdateVisible(false)}
                />
              ) : null}
              <button>
                <BiDetail
                  size="3em"
                  className="update_icon"
                  onClick={() => setAlocacaoModalUpdateVisible(true)}
                />
                <p>Alocações</p>
              </button>
              {alocacaoModalUpdateVisible ? (
                <ModalAlocacaoUpdate
                  onClose={() => setAlocacaoModalUpdateVisible(false)}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
