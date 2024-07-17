import { Container, Symbol, Title } from "./styles";
import symbol from "@/public/images/maiorQue.svg";

const TitleSectionContent = ({ children }) => {
	return (
		<Container>
			<Title>{children}</Title>
			<Symbol
				src={symbol}
				alt='Símbolo da sethe'
			/>
		</Container>
	);
};

export default TitleSectionContent;
