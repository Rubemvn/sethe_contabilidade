import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";
import * as S from "./styles";

import aberturaDeEmpresas from "@/public/images/abertura de empresas.svg";
import assessoriaFiscal from "@/public/images/assessoria fiscal.svg";
import consultoriaSocietaria from "@/public/images/consultoria societaria.svg";
import contabilidadeGeral from "@/public/images/contabilidade geral.svg";
import departamentoPessoal from "@/public/images/departamento pessoal.svg";
import gestaoFinanceira from "@/public/images/gestão financeira.svg";

import symbolsLight from "@/public/images/symbolsSmallLight.svg";
import symbolsDark from "@/public/images/symbolsSmallDark.svg";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
	const { theme } = useThemeContext();

	const card01Ref = useRef(null);
	const card02Ref = useRef(null);
	const card03Ref = useRef(null);
	const card04Ref = useRef(null);
	const card05Ref = useRef(null);
	const card06Ref = useRef(null);
	const symbolsRef = useRef(null);
	const scTxtRef = useRef(null);

	useEffect(() => {
		const cd01 = card01Ref.current;
		const cd02 = card02Ref.current;
		const cd03 = card03Ref.current;
		const cd04 = card04Ref.current;
		const cd05 = card05Ref.current;
		const cd06 = card06Ref.current;
		const symbols = symbolsRef.current;
		const scTxt = scTxtRef.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: cd01,
				start: "top 80%",
				end: "top 60%",
				scrub: 3,
			},
		});

		tl.fromTo(
			cd01,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
			},
		)
			.fromTo(
				cd02,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
				},
				"-=0.3",
			)
			.fromTo(
				cd03,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
				},
				"-=0.3",
			)
			.fromTo(
				cd04,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
				},
				"-=0.3",
			)
			.fromTo(
				cd05,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
				},
				"-=0.3",
			)
			.fromTo(
				cd06,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
				},
				"-=0.3",
			)
			.fromTo(
				symbols,
				{ opacity: 0, x: -300 },
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
				},
				"-=0.3",
			)
			.fromTo(
				scTxt,
				{ opacity: 0, x: 400 },
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
				},
				"-=0.3",
			);
	}, []);

	return (
		<S.Container>
			<S.Content>
				<TitleSectionContent>Serviços</TitleSectionContent>
				<S.Services>
					<S.Service
						ref={card01Ref}
						$variation='impar'>
						<S.ServiceIMG
							src={contabilidadeGeral}
							alt='ilustração de contabilidade geral'
						/>
						<S.ServiceText $variation='impar'>
							Contabilidade
							<br />
							Geral
						</S.ServiceText>
					</S.Service>

					<S.Service
						ref={card02Ref}
						$variation='par'>
						<S.ServiceIMG
							src={aberturaDeEmpresas}
							alt='ilustração de abertura de empresas'
						/>
						<S.ServiceText $variation='par'>
							Abertura de
							<br />
							Empresas
						</S.ServiceText>
					</S.Service>

					<S.Service
						ref={card03Ref}
						$variation='impar'>
						<S.ServiceIMG
							src={assessoriaFiscal}
							alt='ilustração de assessoria fiscal'
						/>
						<S.ServiceText $variation='impar'>
							Assessoria
							<br />
							Fiscal
						</S.ServiceText>
					</S.Service>

					<S.Service
						ref={card04Ref}
						$variation='par'>
						<S.ServiceIMG
							src={gestaoFinanceira}
							alt='ilustração de gestão financeira'
						/>
						<S.ServiceText $variation='par'>
							Gestão
							<br />
							Financeira
						</S.ServiceText>
					</S.Service>

					<S.Service
						ref={card05Ref}
						$variation='impar'>
						<S.ServiceIMG
							src={departamentoPessoal}
							alt='ilustração de departamento pessoal'
						/>
						<S.ServiceText $variation='impar'>
							Departamento
							<br />
							Pessoal
						</S.ServiceText>
					</S.Service>

					<S.Service
						ref={card06Ref}
						$variation='par'>
						<S.ServiceIMG
							src={consultoriaSocietaria}
							alt='ilustração de consultoria societária'
						/>
						<S.ServiceText $variation='par'>
							Consultoria
							<br />
							Societária
						</S.ServiceText>
					</S.Service>
				</S.Services>

				<S.Symbols
					ref={symbolsRef}
					src={theme.title === "dark" ? symbolsDark : symbolsLight}
				/>

				<S.TextSection ref={scTxtRef}>
					Na Sethe, oferecemos todos esses serviços e muito mais, garantindo a
					tranquilidade e o sucesso do seu empreendimento!
				</S.TextSection>
			</S.Content>
		</S.Container>
	);
};

export default ServicesSection;
