import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

export const CustomSlider = ({ label, value, setValue }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Box width={"stretch"}>
      <Text mb="1px" fontSize={"14px"}>{label}</Text>
      <Slider
        colorScheme="brand"
        max={40}
        value={value}
        onChange={(v) => setValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="brand.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${value}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
