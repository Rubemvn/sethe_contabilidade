import ButtonContact from "../ButtonContact/ButtonContact";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import logoLight from "@/public/images/logoLight.svg";
import logoDark from "@/public/images/logoDark.svg";

import {
	Container,
	Content,
	LinkLogoImg,
	LinkTo,
	ListOfLinks,
	LogoImg,
	MenuOptions,
	MenuToggle,
} from "./styles";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useEffect, useState } from "react";
import gsap from "gsap";

const NavBar = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const { theme } = useThemeContext();

	const logo = theme.title === "light" ? logoLight : logoDark;

	const handleClick = () => {
		setMenuToggle(!menuToggle);
		console.log(menuToggle);
	};

	useEffect(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.3 } });
		if (menuToggle) {
			tl.to(".line1", { rotate: -45, width: 35, y: 5 })
				.to(".line2", { rotate: 45, y: -5 }, "-=0.3")
				.to(".line3", { x: 30, opacity: 0 }, "-=0.3");
		} else if (!menuToggle) {
			tl.to(".line1", { rotate: 0, width: 20, y: 0 })
				.to(".line2", { rotate: 0, y: 0 }, "-=0.3")
				.to(".line3", { x: 0, opacity: 1 }, "-=0.3");
		}
	}, [menuToggle]);

	return (
		<Container>
			<Content>
				<LinkLogoImg href={"/"}>
					<LogoImg
						src={logo}
						alt='Logo da sethe contabilidade'
					/>
				</LinkLogoImg>

				<MenuOptions>
					<MenuToggle onClick={() => handleClick()}>
						<div className='line1'></div>
						<div className='line2'></div>
						<div className='line3'></div>
					</MenuToggle>
					<ListOfLinks>
						<li>
							<LinkTo href={"/"}>Início</LinkTo>
						</li>
						<li>
							<LinkTo href={"/"}>Sobre Nós</LinkTo>
						</li>
						<li>
							<LinkTo href={"/"}>Clientes</LinkTo>
						</li>
						<li>
							<ButtonContact>Contate-nos</ButtonContact>
						</li>
					</ListOfLinks>
					<ToggleTheme />
				</MenuOptions>
			</Content>
		</Container>
	);
};

export default NavBar;
