import * as S from "./styles";
import TitleSectionContent from "../TitleSectionContent/TitleSectionContent";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Imagens
import picture1 from "@/public/images/picture-01.png";
import picture2 from "@/public/images/picture-02.png";
import symbolsLight from "@/public/images/symbolsLight.svg";
import symbolsDark from "@/public/images/symbolsDark.svg";
import maiorQue from "@/public/images/maiorQue.svg";
import menorQueLight from "@/public/images/menorQueLight.svg";
import menorQueDark from "@/public/images/menorQueDark.svg";
import mult from "@/public/images/mult.svg";
import somaLight from "@/public/images/somaLight.svg";
import somaDark from "@/public/images/somaDark.svg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
	const { theme } = useThemeContext();

	// Referências
	const Infos01Ref = useRef(null);
	const img01Ref = useRef(null);
	const Infos02Ref = useRef(null);
	const img02Ref = useRef(null);
	const somaRef = useRef(null);
	const multRef = useRef(null);
	const maiorRef = useRef(null);
	const menorRef = useRef(null);

	// Animações
	useEffect(() => {
		const infos01 = Infos01Ref.current;
		const img01 = img01Ref.current;
		const infos02 = Infos02Ref.current;
		const img02 = img02Ref.current;

		const soma = somaRef.current;
		const mult = multRef.current;
		const maior = maiorRef.current;
		const menor = menorRef.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: maior,
				start: "top 80%",
				end: "top 20%",
				scrub: 3,
			},
		});

		// Animação dos Cards de informação
		gsap.fromTo(
			infos01,
			{ x: 500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: infos01,
					start: "top 60%",
					end: "top 30%",
					// markers: true,
					scrub: 3,
				},
				x: 0,
				opacity: 1,
				duration: 1,
			},
		);
		gsap.fromTo(
			img01,
			{ x: -500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: img01,
					start: "top 60%",
					end: "top 30%",
					// markers: true,
					scrub: 3,
				},
				x: 0,
				opacity: 1,
				duration: 1,
			},
		);
		gsap.fromTo(
			infos02,
			{ x: -500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: infos02,
					start: "top 60%",
					end: "top 30%",
					// markers: true,
					scrub: 3,
				},
				x: 0,
				opacity: 1,
				duration: 1,
			},
		);
		gsap.fromTo(
			img02,
			{ x: 500, opacity: 0 },
			{
				scrollTrigger: {
					trigger: img02,
					start: "top 60%",
					end: "top 30%",
					// markers: true,
					scrub: 3,
				},
				x: 0,
				opacity: 1,
				duration: 1,
			},
		);
		gsap.fromTo(
			".titleBrand",
			{ y: 100, opacity: 0 },
			{
				scrollTrigger: {
					trigger: ".titleBrand",
					start: "top 100%",
					end: "top 80%",
					// markers: true,
					scrub: 3,
				},
				y: 0,
				opacity: 1,
				duration: 1,
			},
		);

		// Animação dos Símbolos
		tl.fromTo(
			maior,
			{ x: 200, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1,
			},
		)
			.fromTo(
				soma,
				{ x: 200, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
				},
			)
			.fromTo(
				mult,
				{ x: 200, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
				},
			)
			.fromTo(
				menor,
				{ x: 200, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
				},
			);
	}, []);

	return (
		<S.Container>
			<S.Content>
				<TitleSectionContent>Sobre nós</TitleSectionContent>

				<S.OurCardSectionContent>
					{/* Nossa missão */}
					<S.OurCardSection $side='left'>
						<S.CardSectionImage
							ref={img01Ref}
							src={picture1}
							alt='Pessoa fazendo calculos com caluculadora, papel, caneta e celular'
						/>
						<S.CardSectionInfos
							$side='left'
							ref={Infos01Ref}>
							<h3>
								<S.IconTitleCardSection01 /> Nossa missão
							</h3>
							<h4>Lorem Ipsum is simply dummy text.</h4>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum
							</p>
							<S.Symbols
								src={theme.title === "light" ? symbolsLight : symbolsDark}
							/>
						</S.CardSectionInfos>
					</S.OurCardSection>

					{/* Nossa história */}
					<S.OurCardSection $side='right'>
						<S.CardSectionImage
							src={picture2}
							ref={img02Ref}
							alt='Celular, caderno, caneta e pequenas plantas em um ambiente claro e branco'
						/>
						<S.CardSectionInfos
							$side='right'
							ref={Infos02Ref}>
							<h3>
								Nossa história <S.IconTitleCardSection02 />
							</h3>
							<h4>Lorem Ipsum is simply dummy text.</h4>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum
							</p>
							<S.Symbols
								src={theme.title === "light" ? symbolsLight : symbolsDark}
							/>
						</S.CardSectionInfos>
					</S.OurCardSection>
				</S.OurCardSectionContent>

				{/* Nossa marca */}
				<S.OurBrand>
					<h3 className='titleBrand'>
						Cada símbolo na Sethe representa um pilar da nossa missão de
						transformar sua contabilidade
					</h3>

					<S.BrandCards>
						<S.BrandSymbolCard
							$symbol='maior'
							ref={maiorRef}>
							<S.BrandSymbol src={maiorQue} />
							<h4>MAIOR</h4>
							<p>
								Maior eficiência nos seus processos contábeis, garantindo
								resultados superiores e crescimento sustentável.
							</p>
						</S.BrandSymbolCard>

						<S.BrandSymbolCard
							$symbol='soma'
							ref={somaRef}>
							<S.BrandSymbol
								src={theme.title === "light" ? somaLight : somaDark}
							/>
							<h4>SOME</h4>
							<p>
								Some crescimento ao seu negócio através de planejamento
								tributário e consultoria financeira personalizada.
							</p>
						</S.BrandSymbolCard>

						<S.BrandSymbolCard
							$symbol='multiplique'
							ref={multRef}>
							<S.BrandSymbol src={mult} />
							<h4>MULTIPLIQUE</h4>
							<p>
								Multiplique seus resultados com estratégias contábeis eficientes
								e soluções inovadoras.
							</p>
						</S.BrandSymbolCard>

						<S.BrandSymbolCard
							$symbol='menor'
							ref={menorRef}>
							<S.BrandSymbol
								src={theme.title === "light" ? menorQueLight : menorQueDark}
							/>
							<h4>MENOR</h4>
							<p>
								Menor burocracia e complicação, facilitando a gestão contábil e
								o cumprimento das obrigações fiscais.
							</p>
						</S.BrandSymbolCard>
					</S.BrandCards>
				</S.OurBrand>
			</S.Content>
		</S.Container>
	);
};

export default AboutUs;
