import { FaWhatsapp } from "react-icons/fa";
import { Container } from "./styles";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ButtonWhatsApp = () => {
	const ctRef = useRef(null);
	const handleClick = () => {
		window.open("https://wa.me/558630150480", "_blank");
	};

	useEffect(() => {
		gsap.fromTo(
			ctRef.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				// ease: "power1.inOut",
			},
			"-=.3",
		);
	}, []);

	return (
		<>
			<Container
				onClick={handleClick}
				ref={ctRef}>
				<FaWhatsapp />
			</Container>
		</>
	);
};

export default ButtonWhatsApp;
