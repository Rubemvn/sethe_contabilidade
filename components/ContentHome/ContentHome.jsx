import React from "react";
import { Container } from "./styles";
import HeroSection from "../HeroSection/HeroSection";
import AboutUs from "../AboutUs/AboutUs";
import ServicesSection from "../ServicesSection/ServicesSection";

const ContentHome = () => {
	return (
		<Container>
			<HeroSection />
			<AboutUs />
			<ServicesSection />
		</Container>
	);
};

export default ContentHome;
