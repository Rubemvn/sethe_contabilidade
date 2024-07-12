import React, { useRef } from "react";
import { BGToggle, ButtonToggle, Container } from "./styles";
import gsap from "gsap";
import { useThemeContext } from "@/hooks/useThemeContext";
import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";

const ToggleTheme = () => {
	const { theme, setTheme } = useThemeContext();

	const buttonRef = useRef(null);

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
			onClick={() => {
				handleClick();
			}}>
			<BGToggle />
			<ButtonToggle ref={buttonRef} />
		</Container>
	);
};

export default ToggleTheme;
