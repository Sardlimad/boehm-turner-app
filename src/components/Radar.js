import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const RadarChart = ({
  projectName,
  teamSize,
  teamCulture,
  staffExp,
  pjDynamism,
  pjCriticality,
}) => {
  // Referencia para el div donde se renderizará el gráfico
  const chartRef = useRef(null);

  useEffect(() => {
    // Instanciar el gráfico en el elemento div referenciado
    const chartInstance = echarts.init(chartRef.current, "light", {
      renderer: "svg",
    });

    // Configuración del gráfico de radar
    const option = {
      title: {
        text: "Boehm-Turner Star Representation",
      },
      grid: {
        show: false,
      },
      radar: {
        indicator: [
          { name: "Team Size", max: 100 },
          { name: "Team Culture", max: 5 },
          { name: "Staff Experience", max: 10 },
          { name: "Project Dynamism", max: 50 },
          {
            name: "Project Criticality",
            max: 2, // Configura el máximo como el número de etiquetas - 1
            axisLabel: {
              formatter: (value) => {
                const labels = [
                  "Información",
                  "Bienes Materiales",
                  "Vidas Humanas",
                ];
                return labels[value] || ""; // Mapea los valores a etiquetas cualitativas
              },
            },
          },
        ],
      },
      series: [
        {
          name: "Mi Proyecto",
          type: "radar",
          data: [
            {
              value: [80, 4, 7, 25, 2],
              name: "Project A",
              label: {
                show: true,
                formatter: (params) => {
                  const labels = [
                    "Información",
                    "Bienes Materiales",
                    "Vidas Humanas",
                  ];
                  return params.dataIndex === 4
                    ? labels[params.value]
                    : params.value;
                },
                color: "#333",
                fontSize: 10,
              },
            },
          ],
        },
      ],
    };

    // Asignar las opciones al gráfico
    chartInstance.setOption(option);

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el gráfico al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, []);

  return (
    <div
      className="container radar-container"
      ref={chartRef}
      style={{ width: "700px", height: "600px" }}
    />
  );
};

export default RadarChart;
