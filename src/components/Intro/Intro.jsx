import "./Intro.css";
import React, { useState, useEffect } from "react";
import IntroClientes from "../InfoClientes/InfroClientes";
import InfoAll from "../InfoAll/InfoAll";

export default function Intro() {
  let [graphic, setGraphic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clientes").then(async (res) =>
      setGraphic(await res.json())
    );
  }, []);

  return (
    <div className="intro" id="intro">
      <IntroClientes graphic={graphic} />
      <InfoAll />
    </div>
  );
}
