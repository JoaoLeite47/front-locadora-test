import "./Intro.css";
import React from "react";
import IntroClientes from "../InfoClientes/InfroClientes";
import InfoAll from "../InfoAll/InfoAll";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <IntroClientes />
      <InfoAll />
    </div>
  );
}
