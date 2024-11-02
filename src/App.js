import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Toggle } from "./components/Toggle";
import { ToggleTheme } from "./components/ToggleTheme";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Input,
  Link,
  Select,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CustomSlider } from "./components/CustomSlider";
import theme from "./themes/theme";
import pinkTheme from "./themes/pinkTheme";
import Clementine from "./themes/Clementine";
import GreenHaze from "./themes/GreenHaze";

function App() {
  //Referencia al gráfico
  const chartRef = useRef(null);

  // Parámetros del gráfico
  const [teamSize, setTeamSize] = useState(10);
  const [teamCulture, setTeamCulture] = useState(30);
  const [staffExperience, setStaffExperience] = useState(30);
  const [projectDynamism, setProjectDynamism] = useState(30);
  const [projectCriticality, setProjectCriticality] = useState(10);

  const [title, setTitle] = useState("My Project");
  const [grid, setGrid] = useState(false);

  const [currentTheme, setCurrentTheme] = useState(theme);

  //Etiquetas del gráfico
  const labels = [
    "Staff Experience",
    "Dynamism",
    "Team Culture",
    "Team Size",
    "Criticality",
  ];

  //Opciones del gráfico
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "#b0b3b4",
        },
        suggestedMin: 0,
        suggestedMax: 40,
        grid: {
          display: grid,
          color: "#b0b3b4",
        },
        ticks: {
          stepSize: 10,
          showLabelBackdrop: false,
          textStrokeColor: "#fff",
          textStrokeWidth: 0.6,
        },
      },
    },
  };

  // Data del gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: [
          40 - staffExperience,
          40 - projectDynamism,
          40 - teamCulture,
          teamSize,
          projectCriticality,
        ],
        backgroundColor: currentTheme.colors.transparent[200],
        borderColor: currentTheme.colors.brand[700],
        pointBackgroundColor: currentTheme.colors.brand[100],
        // pointBorderColor: "#fff",
        pointHoverBackgroundColor: currentTheme.colors.brand[700],
        pointHoverBorderColor: currentTheme.colors.brand[100],
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

  const handleSetTheme = (e) => {
    switch (e.target.value) {
      case "pink":
        setCurrentTheme(pinkTheme);
        break;
      case "blue":
        setCurrentTheme(theme);
        break;
      case "clementine":
        setCurrentTheme(Clementine);
        break;
      case "greenhaze":
        setCurrentTheme(GreenHaze);
        break;

      default:
        break;
    }
  };

  return (
    <ChakraProvider theme={currentTheme}>
      <Box textAlign="center" m="15px">
        <ToggleTheme />
        <Heading colorScheme="brand" fontSize="2xl">
          Boehm-Turner Star Representation
        </Heading>
      </Box>
      <Flex
        direction={["column", "row"]}
        w={{ base: "100vw", md: "65vw" }}
        gap={5}
        margin={"auto"}
        className="container"
      >
        {/* Gráfico*/}
        <Box
          flex={6}
          h={"100%"}
          rounded="lg"
          p="15px"
          boxShadow={{ base: "none", md: "2xl" }}
        >
          <Radar ref={chartRef} data={data} options={options} />
        </Box>

        <VStack
          flex={2}
          justifyContent={"space-between"}
          rounded="lg"
          boxShadow={"2xl"}
          p="20px"
        >
          <Box width={"stretch"}>
            <Tabs variant="soft-rounded" colorScheme="brand" isFitted>
              <TabList>
                <Tab>Parameters</Tab>
                <Tab>Style</Tab>
              </TabList>
              <TabPanels mt={2} minWidth="100%" minHeight="18vh">
                <TabPanel m="0px" p="0px" height="100%">
                  <VStack gap={3}>
                    <CustomSlider
                      label={labels[3]}
                      value={teamSize}
                      setValue={setTeamSize}
                    />

                    <CustomSlider
                      label={labels[2]}
                      value={teamCulture}
                      setValue={setTeamCulture}
                    />
                    <CustomSlider
                      label={labels[0]}
                      value={staffExperience}
                      setValue={setStaffExperience}
                    />
                    <CustomSlider
                      label={labels[1]}
                      value={projectDynamism}
                      setValue={setProjectDynamism}
                    />

                    <CustomSlider
                      label={labels[4]}
                      value={projectCriticality}
                      setValue={setProjectCriticality}
                    />
                  </VStack>
                </TabPanel>
                <TabPanel m="0px" p="0px">
                  <VStack
                    spacing={3}
                    divider={<StackDivider borderColor="gray.200" />}
                    width={"100%"}
                    h={"100"}
                    // position="absolute"
                  >
                    <Input
                      id="project_name"
                      p={2}
                      variant="filled"
                      placeholder="Project Title"
                      value={title}
                      width="100%"
                      onChange={(e) => setTitle(e.target.value)}
                      onBlur={(e) =>
                        setTitle(
                          e.target.value.trim() !== ""
                            ? e.target.value
                            : "My Project"
                        )
                      }
                    />
                    <Select
                      id="theme_select"
                      onChange={handleSetTheme}
                      defaultValue="blue"
                      variant={"unstyled"}
                    >
                      <option value={"pink"} key={"trendy-pink-theme"}>
                        TrendyPink Theme
                      </option>
                      <option value={"blue"} key={"blue-theme"}>
                        Blue Theme
                      </option>
                      <option value={"clementine"} key={"clementine-theme"}>
                        Clementine Theme
                      </option>
                      <option value={"greenhaze"} key={"greenhaze-theme"}>
                        GreenHaze Theme
                      </option>
                    </Select>
                    <Toggle label="Grid" isChecked={grid} setCheck={setGrid} />
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box width={"stretch"}>
            <Button
              colorScheme="blue"
              size={{ base: "md", md: "sm" }}
              width="stretch"
              onClick={downloadChart}
              margin="5px 0px"
            >
              <Text pr={2}>Download </Text>
              <FA icon={faDownload} />
            </Button>

            <Text className="author" fontSize={"12px"} align="center">
              Created by{" "}
              <Link href="https://github.com/sardlimad">@Sardlimad</Link>
            </Text>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
