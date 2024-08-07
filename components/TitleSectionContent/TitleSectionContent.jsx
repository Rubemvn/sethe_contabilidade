import gsap from "gsap";
import { Container, Symbol, Title } from "./styles";
import symbol from "@/public/images/maiorQue.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TitleSectionContent = ({ children }) => {
	const ctRef = useRef(null);

	useLayoutEffect(() => {
		const ct = ctRef.current;

		gsap.fromTo(
			ct,
			{ x: 500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: ct,
					start: "top 80%",
					end: "top 60%",
					scrub: 3,
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
