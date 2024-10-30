import React from "react";
import * as d3 from "d3";

export const RadarD3 = () => {
  // Dimensiones del gráfico y márgenes
  const width = 500,
    height = 500,
    margin = 50;

  // Crear SVG
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // Datos de los ejes y escalas individuales
  const axes = [
    { name: "Tamaño de Equipo", max: 300 },
    { name: "Cultura", max: 100 },
    { name: "Experiencia", max: 100 },
    { name: "Dinamismo", max: 100 },
    {
      name: "Criticidad",
      max: 3,
      labels: ["Información", "Bienes Materiales", "Vidas Humanas"],
    },
  ];

  // Datos de la muestra para cada eje
  const data = [
    { axis: "Tamaño de Equipo", value: 3 },
    { axis: "Cultura", value: 3 },
    { axis: "Experiencia", value: 5 },
    { axis: "Dinamismo", value: 6 },
    { axis: "Criticidad", value: 1 },
  ];

  // Radio del gráfico de radar
  const radius = Math.min(width, height) / 2 - margin;

  // Escala radial para cada eje según su máximo
  const angleSlice = (Math.PI * 2) / axes.length;
  const radialScales = axes.map((d) =>
    d3.scaleLinear().domain([0, d.max]).range([0, radius])
  );

  // Crear los ejes y etiquetas de cada punto
  axes.forEach((axis, i) => {
    const angle = angleSlice * i;
    const line = d3
      .line()
      .x((d, j) => radialScales[i](axis.max) * Math.cos(angle - Math.PI / 2))
      .y((d, j) => radialScales[i](axis.max) * Math.sin(angle - Math.PI / 2));

    // Dibuja el eje radial
    svg
      .append("path")
      .datum([0, axis.max])
      .attr("d", line)
      .attr("stroke", "#888")
      .attr("stroke-width", "2px");

    // Etiquetas de los valores cualitativos en el eje de Criticidad
    if (axis.labels) {
      axis.labels.forEach((label, j) => {
        const pos = radialScales[i](j + 1);
        svg
          .append("text")
          .attr("x", pos * Math.cos(angle - Math.PI / 2))
          .attr("y", pos * Math.sin(angle - Math.PI / 2))
          .attr("text-anchor", "middle")
          .attr("dy", "0.35em")
          .style("font-size", "12px")
          .text(label);
      });
    }

    // Etiquetas de cada eje
    svg
      .append("text")
      .attr("x", (radius + 10) * Math.cos(angle - Math.PI / 2))
      .attr("y", (radius + 10) * Math.sin(angle - Math.PI / 2))
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "14px")
      .text(axis.name);
  });

  // Dibujar el área del radar
  const radarLine = d3
    .lineRadial()
    .radius((d, i) => radialScales[i](d.value))
    .angle((d, i) => i * angleSlice)
    .curve(d3.curveLinearClosed);

  svg
    .append("path")
    .datum(data)
    .attr("d", radarLine)
    .attr("fill", "rgba(0, 123, 255, 0.4)")
    .attr("stroke", "blue")
    .attr("stroke-width", 2);

  return <div className="radarD3">RadarD3</div>;
};
