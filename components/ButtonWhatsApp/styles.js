import styled from "styled-components";

export const Container = styled.button`
	color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.dark_slate_gray
			: theme.colors.white};
	font-size: 6rem;
	position: fixed;
	bottom: 6rem;
	right: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	opacity: 0;
	border-radius: 5rem;
	background-color: ${({ theme }) => theme.colors.primary};
	border: 3px solid ${({ theme }) => theme.colors.secondary};
	border-bottom-left-radius: 2rem;
	z-index: 1;

	transition: all 0.15s ease-in-out;

	-webkit-box-shadow: 5px 5px 10px 0px rgba(0, 209, 136, 0.4);
	-moz-box-shadow: 5px 5px 10px 0px rgba(0, 209, 136, 0.4);
	box-shadow: 5px 5px 10px 0px rgba(0, 209, 136, 0.4);

	&:hover {
		transform: translateY(-3px);
		scale: 1.05;

		-webkit-box-shadow: 5px 5px 20px 0px rgba(0, 209, 136, 0.7);
		-moz-box-shadow: 5px 5px 20px 0px rgba(0, 209, 136, 0.7);
		box-shadow: 5px 5px 20px 0px rgba(0, 209, 136, 0.7);
	}

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 5.5rem;
		bottom: 5rem;
		right: 3.5rem;
		padding: 0.9rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 4.8rem;
		bottom: 4rem;
		right: 2.5rem;
		padding: 0.8rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 4rem;
		bottom: 3rem;
		right: 1rem;
		padding: 0.7rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 3.3rem;
		padding: 0.6rem;
		border-width: 0.2rem;
	}
`;
