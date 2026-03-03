import React from "react";
import { Container } from "./styles";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutUs from "@/components/AboutUs/AboutUs";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import Footer from "@/components/Footer/Footer";

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
