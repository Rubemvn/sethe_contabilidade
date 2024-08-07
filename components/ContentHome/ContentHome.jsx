import React from "react";
import { Container } from "./styles";
import HeroSection from "../HeroSection/HeroSection";
import AboutUs from "../AboutUs/AboutUs";
import ServicesSection from "../ServicesSection/ServicesSection";
import ClientsSection from "../ClientsSection/ClientsSection";
import Footer from "../Footer/Footer";

const ContentHome = () => {
	return (
		<Container>
			<HeroSection />
			<AboutUs />
			<ServicesSection />
			<ClientsSection />
			<Footer />
		</Container>
	);
};

export default ContentHome;
