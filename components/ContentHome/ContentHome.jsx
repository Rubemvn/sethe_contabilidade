import React from "react";
import { Container } from "./styles";
import HeroSection from "../HeroSection/HeroSection";
import AboutUs from "../AboutUs/AboutUs";
import ServicesSection from "../ServicesSection/ServicesSection";
import ClientsSection from "../ClientsSection/ClientsSection";

const ContentHome = () => {
	return (
		<Container>
			<HeroSection />
			<AboutUs />
			<ServicesSection />
			<ClientsSection />
		</Container>
	);
};

export default ContentHome;
