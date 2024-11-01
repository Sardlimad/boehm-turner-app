import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

export const SliderThumbWithTooltip = ({ label, value, setValue }) => {
  //   const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={5}
      min={0}
      max={100}
      colorScheme="brand"
      onChange={(v) => setValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={10} mt="1" ml="-2.5" fontSize="sm">
        Comfort
      </SliderMark>
      <SliderMark value={30} mt="1" ml="-2.5" fontSize="sm">
        Discretionary Funds
      </SliderMark>
      <SliderMark value={55} mt="1" ml="-2.5" fontSize="sm">
        Essential Funds
      </SliderMark>
      <SliderMark value={80} mt="1" ml="-2.5" fontSize="sm">
        Single Life
      </SliderMark>
      <SliderMark value={90} mt="1" ml="-2.5" fontSize="sm">
        Many Lifes
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${value}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};
