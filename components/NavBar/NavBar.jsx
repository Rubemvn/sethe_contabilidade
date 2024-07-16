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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NavBar = () => {
	const listOfLinksRef = useRef(null);
	const logoRef = useRef(null);
	const menuTGLRef = useRef(null);

	const [menuToggle, setMenuToggle] = useState(false);

	const { theme } = useThemeContext();

	const logo = theme.title === "light" ? logoLight : logoDark;

	const handleClick = () => {
		setMenuToggle(!menuToggle);
	};

	useEffect(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.3 } });
		const listOfLinks = listOfLinksRef.current;

		if (menuToggle) {
			tl.to(".line1", { rotate: -45, width: 35, y: 10.5 })
				.to(".line2", { rotate: 45 }, "-=0.3")
				.to(".line3", { x: 30, opacity: 0 }, "-=0.3");

			gsap.to(listOfLinks, { opacity: 1, x: 0 });
		} else if (!menuToggle) {
			tl.to(".line1", { rotate: 0, width: 20, y: 0 })
				.to(".line2", { rotate: 0, y: 0 }, "-=0.3")
				.to(".line3", { x: 0, opacity: 1 }, "-=0.3");

			gsap.to(listOfLinks, { opacity: 0, x: 500 });
		}
	}, [menuToggle]);

	useEffect(() => {
		const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

		const logorf = logoRef.current;
		const listOfLinks = listOfLinksRef.current;
		const menuTGL = menuTGLRef.current;

		tl.fromTo(logorf, { x: 400 }, { x: 0, opacity: 1 })
			.fromTo(listOfLinks, { x: 400 }, { x: 0, opacity: 1 }, "-=.9")
			.fromTo(menuTGL, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
	}, []);

	return (
		<Container>
			<Content>
				<LinkLogoImg
					href={"/"}
					ref={logoRef}>
					<LogoImg
						src={logo}
						alt='Logo da sethe contabilidade'
					/>
				</LinkLogoImg>

				<MenuOptions $menuToggle={menuToggle}>
					<MenuToggle
						onClick={handleClick}
						ref={menuTGLRef}>
						<div className='line1'></div>
						<div className='line2'></div>
						<div className='line3'></div>
					</MenuToggle>

					<div className='listLinks'>
						<ListOfLinks ref={listOfLinksRef}>
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
					</div>

					<ToggleTheme />
				</MenuOptions>
			</Content>
		</Container>
	);
};

export default NavBar;
