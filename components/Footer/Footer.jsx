import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";
import logoLight from "@/public/images/logoLight copy.svg";
import logoDark from "@/public/images/logoDark.svg";
import symbolsLight from "@/public/images/symbolsFooterLight.svg";
import symbolsDark from "@/public/images/symbolsFooterDark.svg";
import { useThemeContext } from "@/hooks/useThemeContext";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	const { theme } = useThemeContext();

	return (
		<>
			<S.Container id='section'>
				<S.Content>
					<S.CategoryContainer className='container'>
						<S.Title>CATEGORIAS</S.Title>
						<S.Categories>
							<S.Category href={"/"}>Home</S.Category>
							<S.Category href={"/"}>Serviços</S.Category>
							<S.Category href={"/"}>Sobre nós</S.Category>
							<S.Category href={"/"}>Clientes</S.Category>
						</S.Categories>
						<ToggleTheme />
					</S.CategoryContainer>

					<S.SetheContainer className='container'>
						<S.LogoSethe
							src={theme.title === "light" ? logoLight : logoDark}
							alt='Sethe Soluções Contábeis'
						/>
						<S.ButtonContact href={"/"}>
							Contate-nos <FaWhatsapp />
						</S.ButtonContact>
						<S.OpenQuotes>{"“"}</S.OpenQuotes>
						<S.Phrase>
							O futuro pertence àqueles que acreditam na beleza de seus sonhos.
						</S.Phrase>
						<S.Author>- Eleanor Roosevelt</S.Author>
						<S.Symbols
							src={theme.title === "light" ? symbolsLight : symbolsDark}
							alt='Símbolos da sethe'
						/>
					</S.SetheContainer>

					<S.InfosContainer className='container'>
						<S.Contacts>
							<S.TitleContact>CONTATO</S.TitleContact>

							<S.ContactLink href={""}>
								<span>escritorio@sethecontabilidade.com.br</span>
								<MdOutlineMailOutline />
							</S.ContactLink>
							<S.ContactLink
								href={"https://www.instagram.com/sethecontabilidade/"}
								target='_blank'>
								<span>@sethecontabilidade</span>
								<FaInstagram />
							</S.ContactLink>
							<S.ContactLink href={""}>
								<span>86 3015-0480</span>
								<BsTelephone />
							</S.ContactLink>
							<S.ContactLink href={""}>
								<span>
									Rua Thomaz Tajra, 1200 - Sala 9 - Jóquei, Teresina - PI,
									64048-380
								</span>
								<FaLocationDot />
							</S.ContactLink>
						</S.Contacts>

						<S.TeamContainer>
							<S.TitleTeam>EQUIPE</S.TitleTeam>
							<S.Member>
								<S.Name>Amanda Moura</S.Name>
								<S.CRC>CRC: 11799</S.CRC>
							</S.Member>
							<S.Member>
								<S.Name>Vitor Alves</S.Name>
								<S.CRC>CRC: 13206</S.CRC>
							</S.Member>
						</S.TeamContainer>
					</S.InfosContainer>
				</S.Content>
			</S.Container>

			<S.FooterContainer>
				<span>© 2024 Sethe Contabilidade. Todos os direitos reservados.</span>
			</S.FooterContainer>
		</>
	);
};

export default Footer;
