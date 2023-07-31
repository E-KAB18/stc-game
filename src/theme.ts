// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config

const config: ThemeConfig = {
	initialColorMode: "light",
};

// 3. extend the theme
const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: "#f5f5f5",
			100: "#ededed",
			200: "#d3d3d3",
			300: "#b3b3b3",
			400: "#a0a0a0",
			500: "#d3d3d3",
			600: "#6c6c6c",
			700: "#202020",
			800: "#121212",
			900: "#111",
		},
		brand: {
			50: "#5f3c82",
			100: "#78529e",
			200: "#654882",
			300: "#5f3c82",
			400: "#5f3c82",
			500: "#5f3c82",
			600: "#5f3c82",
			700: "#5f3c82",
			800: "#5f3c82",
			900: "#5f3c82",
		},
	},
});

export default theme;
