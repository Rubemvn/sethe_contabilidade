import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";
import * as S from "./styles";
import satisfacao from "@/public/images/satisfação garantida.svg";
import crescimento from "@/public/images/crescimento continuo.svg";
import maisClientes from "@/public/images/+100 clientes.svg";

const ClientsSection = () => {
	return (
		<S.Container>
			<S.Content>
				<TitleSectionContent>Clientes</TitleSectionContent>
				<S.SectionInfosCLients>
					<S.CardInfoClient>
						<S.ImageInfo
							src={maisClientes}
							alt='icone que indica mais de 100 clientes'
						/>
						<S.TitleSectionInfo>Mais de 100 Clientes</S.TitleSectionInfo>
						<S.DescriptionSectionInfo>
							Atendendo com excelência mais de 100 empresas.
						</S.DescriptionSectionInfo>
					</S.CardInfoClient>

					<S.CardInfoClient>
						<S.ImageInfo
							src={crescimento}
							alt='icone que crecismento contínuo'
						/>
						<S.TitleSectionInfo>Crescimento Contínuo</S.TitleSectionInfo>
						<S.DescriptionSectionInfo>
							Clientes satisfeitos que recomendam nossos serviços a outros.
						</S.DescriptionSectionInfo>
					</S.CardInfoClient>

					<S.CardInfoClient>
						<S.ImageInfo
							src={satisfacao}
							alt='icone que indica satisfação'
						/>
						<S.TitleSectionInfo>Satisfação Garantida</S.TitleSectionInfo>
						<S.DescriptionSectionInfo>
							Satisfação com a qualidade e eficiência dos nossos serviços.
						</S.DescriptionSectionInfo>
					</S.CardInfoClient>
				</S.SectionInfosCLients>
			</S.Content>
		</S.Container>
	);
};

export default ClientsSection;
