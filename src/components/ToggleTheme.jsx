import { IconButton, useColorMode } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const savedMode = Cookies.get('mode');
    if (savedMode && savedMode !== colorMode) {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  const handleColorMode = () => {
    toggleColorMode();

    Cookies.set('mode', colorMode === 'light' ? 'dark' : 'light', { expires: 7 });
  }

  return (
    <IconButton
      onClick={handleColorMode}
      icon={colorMode === "light" ? <FA icon={faMoon} color="#f1c40f" /> : <FA icon={faSun} color="#f39c12" />}
      variant="ghost"
      color="brand.500"
      size="lg"
      float="right"
    />
  );
};
