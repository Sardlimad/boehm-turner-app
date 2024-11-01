import { extendTheme } from "@chakra-ui/react";

const brand = {
  50: "#f1fcf6",
  100: "#e0f8e9",
  200: "#c2f0d5",
  300: "#92e3b4",
  400: "#5bcd8c",
  500: "#35b26b",
  600: "#289a59",
  700: "#217445",
  800: "#1f5c3a",
  900: "#1b4c31",
  950: "#0a2919",
};

const GreenHaze = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "brand.50", // Fondo general
        color: props.colorMode === "dark" ? "gray.50" : "gray.900",
      },
    }),
  },
  colors: {
    brand: brand,

    transparent: {
      50: `${brand[50]}88`,
      100: `${brand[100]}88`,
      200: `${brand[200]}88`,
      300: `${brand[300]}88`,
    },
    gray: {
      20: "#f9fafb",
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
  fonts: {
    heading: `'Montserrat', 'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "8px",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.600" : "brand.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.700" : "brand.600",
          },
          _active: {
            bg: props.colorMode === "dark" ? "brand.800" : "brand.700",
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === "dark" ? "brand.400" : "brand.500",
          color: props.colorMode === "dark" ? "brand.400" : "brand.500",
          _hover: { bg: props.colorMode === "dark" ? "brand.900" : "brand.50" },
          _active: {
            bg: props.colorMode === "dark" ? "brand.950" : "brand.100",
          },
        }),
      },
    },
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: "8px",
          },
        },
      },
      variants: {
        filled: (props) => ({
          field: {
            bg: props.colorMode === "dark" ? "gray.700" : "gray.100",
            _hover: {
              bg: props.colorMode === "dark" ? "gray.600" : "gray.200",
            },
            _focus: {
              bg: props.colorMode === "dark" ? "gray.800" : "white",
              borderColor: "brand.500",
            },
          },
        }),
      },
    },
    Box: {
      baseStyle: (props) => ({
        bg: props.colorMode === "dark" ? "gray.700" : "brand.50",
      }),
    },
    Stack: {
      baseStyle: (props) => ({
        bg: props.colorMode === "dark" ? "gray.700" : "brand.50",
      }),
    },
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: "brand.500",
          },
        },
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "brand.300" : "brand.700",
        _hover: {
          textDecoration: "none",
        },
      }),
    },
  },
});

export default GreenHaze;
