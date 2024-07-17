import Image from "next/image";
import { Container, Content } from "./styled";
import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";

const AboutUs = () => {
	return (
		<Container>
			<Content>
				<TitleSectionContent>Sobre nós</TitleSectionContent>
			</Content>
		</Container>
	);
};

export default AboutUs;
