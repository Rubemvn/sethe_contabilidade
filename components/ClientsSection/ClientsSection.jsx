import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";
import * as S from "./styles";

const ClientsSection = () => {
	return (
		<S.Container>
			<S.Content>
				<TitleSectionContent>Clientes</TitleSectionContent>
				<S.CardsClients>
					<S.CardInfos></S.CardInfos>
				</S.CardsClients>
			</S.Content>
		</S.Container>
	);
};

export default ClientsSection;
