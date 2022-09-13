import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import "./ChartAll.css";

export default function ChartAll({
  cliente = [],
  carros = [],
  alocacao = [],
  categoria = [],
}) {
  const data = [
    { name: "Clientes", value: cliente.length },
    { name: "Carros", value: carros.length },
    { name: "Alocação", value: alocacao.length },
    { name: "Categoria", value: categoria.length },
  ];
  //   const data02 = [
  //     { name: "Alocação", value: alocacao.length },
  //     { name: "Categoria", value: categoria.length },
  //   ];

  return (
    <div
      className="ChartAll"
      style={{ width: "100%", height: 300, alignItems: "center" }}
    >
      <ResponsiveContainer>
        <PieChart className="chartAllPie">
          <Pie dataKey="value" className="chartAllPie" data={data} fill="#39ff14" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
