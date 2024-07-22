import gsap from "gsap";
import { Container, Symbol, Title } from "./styles";
import symbol from "@/public/images/maiorQue.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const TitleSectionContent = ({ children }) => {
	gsap.registerPlugin(ScrollTrigger);
	console.log("Olá mundo");

	const ctRef = useRef(null);

	useEffect(() => {
		const ct = ctRef.current;

		gsap.fromTo(
			ct,
			{ x: 500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: ct,
					start: "bottom 650px", // Ajuste conforme necessário
					end: "top 700px", // Ajuste conforme necessário
					scrub: 2,
					pin: ct,
				},
				x: 0,
				y: 0,
				opacity: 1,
			},
		);
	}, []);

	return (
		<Container ref={ctRef}>
			<Title>{children}</Title>
			<Symbol
				src={symbol}
				alt='Símbolo da sethe'
			/>
		</Container>
	);
};

export default TitleSectionContent;
