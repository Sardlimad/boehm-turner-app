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
import PropTypes from 'prop-types';
import { toInteger } from "lodash";

export const CustomSlider = ({ label, value, setValue, prefix, tpLabels, subfix }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleLabels = () => {

    if (tpLabels) {
      const partition = 40 / tpLabels.length;

      const i = toInteger(value / partition);
      console.log(i);
      return tpLabels[i];
    }
    else {
      return value;
    }
  }

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
          // label={`${value}`}
          label={handleLabels()}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};

CustomSlider.propTypes = {
  label: PropTypes.string,
  // value: PropTypes.int,
  prefix: PropTypes.string,
  tpLabels: PropTypes.array,
  subfix: PropTypes.string,
}