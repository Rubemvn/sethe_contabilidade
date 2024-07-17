import React from "react";
import { Container } from "./styles";
import HeroSection from "../HeroSection/HeroSection";
import AboutUs from "../AboutUs/AboutUs";

const ContentHome = () => {
	return (
		<Container>
			<HeroSection />
			<AboutUs />
		</Container>
	);
};

export default ContentHome;
