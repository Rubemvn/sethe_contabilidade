"use client";
import ContentHome from "@/components/ContentHome/ContentHome";
import Layout from "@/components/Layout/Layout";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = { tema: "theme" };

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Layout>
				<ContentHome />
			</Layout>
		</ThemeProvider>
	);
}
