"use client";
import ContentHome from "@/components/ContentHome/ContentHome";
import Layout from "@/components/Layout/Layout";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "@/hooks/useThemeContext";
import device from "@/styles/device";

export default function Home() {
	const { theme } = useThemeContext();

	const themeData = {
		...theme,
		device: {
			...device,
		},
	};

	return (
		<ThemeProvider theme={themeData}>
			<GlobalStyles />
			<Layout>
				<ContentHome />
			</Layout>
		</ThemeProvider>
	);
}
