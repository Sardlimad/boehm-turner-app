import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { ToggleTheme } from "./components/ToggleTheme";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function App() {
  //Referencia al gráfico
  const chartRef = useRef(null);

  // Parámetros del gráfico
  const [teamSize, setTeamSize] = useState(10);
  const [teamCulture, setTeamCulture] = useState(30);
  const [staffExperience, setStaffExperience] = useState(30);
  const [projectDynamism, setProjectDynamism] = useState(30);
  const [projectCriticality, setProjectCriticality] = useState(10);

  // Data del gráfico
  const data = {
    labels: [
      "Staff Experience",
      "Project Dynamism",
      "Team Culture",
      "Team Size",
      "Project Criticality",
    ],
    datasets: [
      {
        label: "Project Star Parameters",
        data: [
          40 - staffExperience,
          40 - projectDynamism,
          40 - teamCulture,
          teamSize,
          projectCriticality,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const downloadChart = () => {
    const chart = chartRef.current;
    if (chart) {
      const link = document.createElement("a");
      link.href = chart.toBase64Image();
      link.download = "boehm-turner-star.png";
      link.click();
    }
  };

  return (
    <>
      <h1>Boehm-Turner Star Representation</h1>

      {/* Cambio de tema */}
      <ToggleTheme />

      <div className="super-container">
        {/* Gráfico*/}
        <div className="container radar-container">
          <Radar
            ref={chartRef}
            data={data}
            options={{
              scales: {
                r: {
                  angleLines: {
                    display: false,
                  },
                  suggestedMin: 0,
                  suggestedMax: 40,
                },
              },
            }}
          />
        </div>

        {/* Controles de parámetros */}
        <div className="slider-container container">
          <div className="options-range">
            <h4>Parameters</h4>
            <label for="teamSize">
              {/* <FA icon={faInfoCircle} />  */}
              Team Size:
              <span> {teamSize}</span>
            </label>
            <input
              id="teamSize"
              type="range"
              min="1"
              max="40"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
          </div>

          <div className="options-range">
            <label for="teamCulture">
              {/* <FA icon={faInfoCircle} />  */}
              Team Culture:
              <span> {teamCulture}</span>
            </label>
            <input
              id="teamCulture"
              type="range"
              min="1"
              max="40"
              value={teamCulture}
              onChange={(e) => setTeamCulture(e.target.value)}
            />
          </div>

          <div className="options-range">
            <label for="staffExperience">
              {/* <FA icon={faInfoCircle} />  */}
              Staff Experience:
              <span> {staffExperience}</span>
            </label>
            <input
              id="staffExperience"
              type="range"
              min="1"
              max="40"
              value={staffExperience}
              onChange={(e) => setStaffExperience(e.target.value)}
            />
          </div>

          <div className="options-range">
            <label for="dynamism">
              {/* <FA icon={faInfoCircle} />  */}
              Project Dynamism:
              <span> {projectDynamism}</span>
            </label>
            <input
              id="dynamism"
              type="range"
              min="1"
              max="40"
              value={projectDynamism}
              onChange={(e) => setProjectDynamism(e.target.value)}
            />
          </div>

          <div className="options-range">
            <label for="criticality">
              {/* <FA icon={faInfoCircle} /> */}
              Project Criticality:
              <span> {projectCriticality}</span>
            </label>
            <input
              id="criticality"
              type="range"
              min="1"
              max="40"
              value={projectCriticality}
              onChange={(e) => setProjectCriticality(e.target.value)}
            />
          </div>
          <hr />
          <button className="download-button" onClick={downloadChart}>
            Download &nbsp;
            <FA icon={faDownload} />
          </button>

          <p className="author">
            Created by &nbsp;
            <a href="https://github.com/sardlimad">@Sardlimad</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
