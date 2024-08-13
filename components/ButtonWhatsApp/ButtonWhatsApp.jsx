import { FaWhatsapp } from "react-icons/fa";
import { Container } from "./styles";

const ButtonWhatsApp = () => {
	const handleClick = () => {
		window.open("https://wa.me/558630150480", "_blank");
	};

	return (
		<Container onClick={handleClick}>
			<FaWhatsapp />
		</Container>
	);
};

export default ButtonWhatsApp;
