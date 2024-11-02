import { IconButton, useColorMode } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FA icon={faMoon} color="#f1c40f" /> : <FA icon={faSun} color="#f39c12" />}
      variant="ghost"
      color="brand.500"
      size="lg"
      float="right"
    />
  );
};
