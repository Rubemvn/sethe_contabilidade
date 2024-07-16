import ButtonContact from "../ButtonContact/ButtonContact";
import {
	ButtonsContainer,
	Container,
	Content,
	SocialMediaButton,
	Symbol,
	SymbolsID,
	TextContainer,
	Title,
	TitleContainer,
	WelcomeContainer,
	WelcomeImage,
} from "./styles";

import maior_que from "@/public/images/maior_que.svg";
import menor_que from "@/public/images/menor_que.svg";
import menorLight from "@/public/images/menor_que_light.svg";
import mult from "@/public/images/mult.svg";
import soma from "@/public/images/soma.svg";
import somaLight from "@/public/images/soma_light.svg";
import initial from "@/public/images/initial.svg";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useThemeContext } from "@/hooks/useThemeContext";

const HeroSection = () => {
	const maiorQueRef = useRef(null);
	const menorQueRef = useRef(null);
	const somaRef = useRef(null);
	const multRef = useRef(null);
	const txtCtRef = useRef(null);
	const btnCtRef = useRef(null);
	const wcmImgRef = useRef(null);

	const { theme } = useThemeContext();

	useEffect(() => {
		const maiorQue = maiorQueRef.current;
		const mult = multRef.current;
		const soma = somaRef.current;
		const menorQue = menorQueRef.current;
		const txtCt = txtCtRef.current;
		const btnCt = btnCtRef.current;
		const wcmImg = wcmImgRef.current;

		const tl = gsap.timeline({ defaults: { delay: 0.3 } });
		const tl02 = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

		tl.to(maiorQue, {
			duration: 3,
			rotateZ: 360,
			repeat: -1,
			yoyo: true,
		})
			.to(
				soma,
				{
					duration: 5,
					rotateZ: 360,
					repeat: Infinity,
					ease: "power1.inOut",
				},
				"-=3",
			)
			.to(
				mult,
				{
					duration: 8,
					rotateZ: -360,
					repeat: Infinity,
					ease: "none",
				},
				"-=5",
			)
			.to(
				menorQue,
				{
					duration: 0.7,
					y: -20,
					repeat: -1,
					yoyo: true,
				},
				"-=8",
			);

		gsap.fromTo(
			wcmImg,
			{ x: 300, opacity: 0 },
			{ duration: 1, opacity: 1, x: 0 },
		);

		tl02
			.fromTo(txtCt, { x: 300, opacity: 0 }, { x: 0, opacity: 1 })
			.fromTo(btnCt, { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, "-=.7")
			.fromTo(maiorQue, { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, "-=.8")
			.fromTo(soma, { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, "-=.8")
			.fromTo(mult, { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, "-=.8")
			.fromTo(menorQue, { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, "-=.8");
	}, []);

	return (
		<Container>
			<Content>
				<WelcomeContainer>
					<TitleContainer>
						<h1 className='hidden'>É simples</h1>
						<h1 className='hidden'>É sethe</h1>
						<Title>
							<TypeAnimation
								sequence={["", 100, "É simples!", 10000, "", 2000]}
								wrapper='span'
								repeat={Infinity}
							/>
						</Title>
						<Title>
							<TypeAnimation
								sequence={["", 1100, "É sethe!", 10000, "", 2000]}
								wrapper='span'
								repeat={Infinity}
							/>
						</Title>
					</TitleContainer>

					<TextContainer ref={txtCtRef}>
						Especialistas em contabilidade, planejamento tributário e
						consultoria financeira, oferecendo soluções personalizadas para
						pequenas e médias empresas.
					</TextContainer>

					<ButtonsContainer ref={btnCtRef}>
						<ButtonContact>CONHEÇA A SETHE</ButtonContact>
						<SocialMediaButton href='/'>
							<FaInstagram />
						</SocialMediaButton>
						<SocialMediaButton href='/'>
							<FaWhatsapp />
						</SocialMediaButton>
					</ButtonsContainer>

					<SymbolsID>
						<Symbol
							ref={maiorQueRef}
							src={maior_que}
							alt='Símbolo de Maior que'
						/>
						<Symbol
							ref={somaRef}
							src={theme.title === "dark" ? somaLight : soma}
							alt='Símbolo de Adição'
						/>
						<Symbol
							ref={multRef}
							src={mult}
							alt='Símbolo de Multiplição'
						/>
						<Symbol
							ref={menorQueRef}
							src={theme.title === "dark" ? menorLight : menor_que}
							alt='Símbolo de Menor que'
						/>
					</SymbolsID>
				</WelcomeContainer>
				<WelcomeImage
					ref={wcmImgRef}
					src={initial}
					alt='Ilustração de contabilidade'
				/>
			</Content>
		</Container>
	);
};

export default HeroSection;
