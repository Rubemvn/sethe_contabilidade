import gsap from "gsap";
import { Container, Symbol, Title } from "./styles";
import symbol from "@/public/images/maiorQue.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const TitleSectionContent = ({ children }) => {
	gsap.registerPlugin(ScrollTrigger);

	const ctRef = useRef(null);

	useEffect(() => {
		const ct = ctRef.current;

		gsap.fromTo(
			ct,
			{ x: 500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: ct,
					start: "top 650px", // Ajuste conforme necessário
					end: "bottom 700px", // Ajuste conforme necessário
					scrub: 2,
				},
				x: 0,
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
