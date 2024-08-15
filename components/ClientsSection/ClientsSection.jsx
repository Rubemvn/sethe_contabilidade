// Components
import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";
import * as S from "./styles";
// Images
import satisfacao from "@/public/images/satisfação garantida.svg";
import crescimento from "@/public/images/crescimento continuo.svg";
import maisClientes from "@/public/images/mais de 100 clientes.svg";
import symbolsL from "@/public/images/symbolsSmallLight.svg";
import symbolsD from "@/public/images/symbolsSmallDark.svg";
import mais1cafe from "@/public/images/mais1cafe.png";
import potencial from "@/public/images/potencial.png";
import pingo from "@/public/images/pingo 1.png";
import rta from "@/public/images/RTA 1.png";
import facilite from "@/public/images/facilite.png";
import cecy from "@/public/images/cecy.png";
import oncobem from "@/public/images/oncobem.png";
import seEng from "@/public/images/seEng.jpg";
// hooks
import { useThemeContext } from "@/hooks/useThemeContext";
import { useEffect, useRef } from "react";
// libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
	const { theme } = useThemeContext();

	const cardInfo01Ref = useRef(null);
	const cardInfo02Ref = useRef(null);
	const cardInfo03Ref = useRef(null);
	const symbols01Ref = useRef(null);
	const symbols02Ref = useRef(null);
	const clientsRef = useRef(null);

	useEffect(() => {
		const cdIf01 = cardInfo01Ref.current;
		const cdIf02 = cardInfo02Ref.current;
		const cdIf03 = cardInfo03Ref.current;
		const smbs01 = symbols01Ref.current;
		const smbs02 = symbols02Ref.current;
		const clts = clientsRef.current;

		const tl01 = gsap.timeline({
			scrollTrigger: {
				trigger: cdIf01,
				start: "top 90%",
				end: "top 50%",
				// markers: true,
				scrub: 3,
			},
		});

		tl01
			.fromTo(
				cdIf01,
				{ opacity: 0, y: 200 },
				{
					opacity: 1,
					y: 0,
				},
			)
			.fromTo(
				cdIf02,
				{ opacity: 0, y: 200 },
				{
					opacity: 1,
					y: 0,
				},
			)
			.fromTo(
				cdIf03,
				{ opacity: 0, y: 200 },
				{
					opacity: 1,
					y: 0,
				},
			);

		// symbols animation
		gsap.fromTo(
			smbs01,
			{ opacity: 0, x: -300 },
			{
				scrollTrigger: {
					trigger: smbs01,
					start: "top 90%",
					end: "top 70%",
					scrub: 3,
				},
				opacity: 1,
				x: 0,
			},
		);
		gsap.fromTo(
			smbs02,
			{ opacity: 0, x: 300 },
			{
				scrollTrigger: {
					trigger: smbs02,
					start: "top 90%",
					end: "top 70%",
					scrub: 3,
				},
				opacity: 1,
				x: 0,
			},
		);
		// clients
		gsap.fromTo(
			clts,
			{ opacity: 0, x: 400 },
			{
				scrollTrigger: {
					trigger: clts,
					start: "top 90%",
					end: "top 80%",
					scrub: 3,
				},
				opacity: 1,
				x: 0,
			},
		);
	}, []);

	return (
		<S.Container id='clients'>
			<S.Content>
				<TitleSectionContent>Clientes</TitleSectionContent>

				<S.SectionInfosCLients>
					<S.CardInfoClient ref={cardInfo01Ref}>
						<S.ImageInfo
							src={maisClientes}
							alt='icone que indica mais de 100 clientes'
						/>
						<S.TitleSectionInfo>Mais de 100 Clientes</S.TitleSectionInfo>
						<S.DescriptionSectionInfo>
							Atendendo com excelência mais de 100 empresas.
						</S.DescriptionSectionInfo>
					</S.CardInfoClient>

					<S.CardInfoClient ref={cardInfo02Ref}>
						<S.ImageInfo
							src={crescimento}
							alt='icone que crecismento contínuo'
						/>
						<S.TitleSectionInfo>Crescimento Contínuo</S.TitleSectionInfo>
						<S.DescriptionSectionInfo>
							Clientes satisfeitos que recomendam nossos serviços a outros.
						</S.DescriptionSectionInfo>
					</S.CardInfoClient>

					<S.CardInfoClient ref={cardInfo03Ref}>
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

				<S.Symbols
					src={theme.title === "light" ? symbolsL : symbolsD}
					alt='Símbolos da Sethe'
					ref={symbols01Ref}
				/>

				<S.ClientsContainer ref={clientsRef}>
					<S.TitleClientsContainer>
						Clientes que confiam na sethe
					</S.TitleClientsContainer>
					<S.ClientsLogos>
						<S.Client
							src={mais1cafe}
							alt='mais 1 café'
						/>

						<S.Client
							src={potencial}
							alt='Potencial Engenharia'
						/>

						<S.Client
							src={pingo}
							alt='pingo'
						/>

						<S.Client
							src={rta}
							alt='RTA'
						/>
						<S.Client
							src={facilite}
							alt='facilite'
						/>
						<S.Client
							src={cecy}
							alt='Cecy'
						/>
						<S.Client
							src={oncobem}
							alt='Oncobem'
						/>
						<S.Client
							src={seEng}
							alt='SE Engenharia'
						/>
					</S.ClientsLogos>
				</S.ClientsContainer>

				<S.Symbols
					src={theme.title === "light" ? symbolsL : symbolsD}
					alt='Símbolos da Sethe'
					ref={symbols02Ref}
				/>
			</S.Content>
		</S.Container>
	);
};

export default ClientsSection;
