import ThemeContextProvider from "@/context/ThemeContext";
import StyledComponentsRegistry from "./registry";

export const metadata = {
	metadataBase: new URL("https://www.sethecontabilidade.com.br"),
	title: "Sethe Contabilidade",
	description:
		"A Sethe Contabilidade oferece serviços contábeis completos para pequenas e médias empresas, auxiliando no crescimento e na gestão financeira com excelência.",
	icons: {
		icon: ["/icons/favicon.svg?v=4"],
		appleTouchIcon: ["/icons/apple-touch-icon.png"],
	},
	keywords:
		"contabilidade, serviços contábeis, gestão financeira, consultoria empresarial, pequenas empresas, médias empresas, sethe, empresas de contabilidade, empresas de teresina",
	author: "Sethe Contabilidade",
	openGraph: {
		type: "website",
		url: "https://www.sethecontabilidade.com.br",
		title: "Sethe Contabilidade - Soluções Contábeis",
		description:
			"A Sethe Contabilidade oferece serviços contábeis completos para pequenas e médias empresas.",
		images: ["/images/sethe_bg.jpg"],
		site_name: "Sethe Contabilidade",
		twitter: {
			title: "Sethe Contabilidade - Soluções Contábeis de Qualidade",
			description:
				"Serviços contábeis completos para pequenas e médias empresas.",
			image: "/images/sethe_bg.jpg",
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<body>
				<StyledComponentsRegistry>
					<ThemeContextProvider>{children}</ThemeContextProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
