import React from "react";
import { Container } from "./styles";

const ButtonContact = ({ children }) => {
	const handleClick = () => {
		window.open("https://wa.me/558630150480", "_blank");
	};

	return <Container onClick={handleClick}>{children}</Container>;
};

export default ButtonContact;
