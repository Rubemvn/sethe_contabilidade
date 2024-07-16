import { useEffect, useRef } from "react";
import { BGToggle, ButtonToggle, Container } from "./styles";
import gsap from "gsap";
import { useThemeContext } from "@/hooks/useThemeContext";
import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";

const ToggleTheme = () => {
	const { theme, setTheme } = useThemeContext();

	const buttonRef = useRef(null);
	const ctRef = useRef(null);

	useEffect(() => {
		const ct = ctRef.current;

		gsap.fromTo(
			ct,
			{ y: -100, opacity: 0 },
			{ duration: 1, delay: 0.3, y: 0, opacity: 1 },
		);
	}, []);

	const handleClick = () => {
		const button = buttonRef.current;
		setTheme((prevState) => (prevState === dark ? light : dark));

		if (theme === light) {
			gsap.to(button, { duration: 0.3, y: 28 });
		} else if (theme === dark) {
			gsap.to(button, { duration: 0.3, y: 0 });
		}
	};

	return (
		<Container
			ref={ctRef}
			onClick={() => {
				handleClick();
			}}>
			<BGToggle />
			<ButtonToggle ref={buttonRef} />
		</Container>
	);
};

export default ToggleTheme;
