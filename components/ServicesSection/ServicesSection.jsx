import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";
import * as S from "./styles";

const ServicesSection = () => {
	return (
		<S.Container>
			<S.Content>
				<TitleSectionContent>Serviços</TitleSectionContent>
				<S.ServicesContent>
					<S.Services>
						<S.Service></S.Service>
						<S.Service></S.Service>
						<S.Service></S.Service>
						<S.Service></S.Service>
						<S.Service></S.Service>
						<S.Service></S.Service>
					</S.Services>
					<S.Symbols />
					<S.TextSection>
						Na Sethe, oferecemos todos esses serviços e muito mais, garantindo a
						tranquilidade e o sucesso do seu empreendimento!
					</S.TextSection>
				</S.ServicesContent>
			</S.Content>
		</S.Container>
	);
};

export default ServicesSection;
