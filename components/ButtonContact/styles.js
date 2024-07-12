import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.medium_aquamarine};
	color: ${({ theme }) => theme.colors.dark_slate_gray};
	border: none;
	font-size: 2rem;
	font-weight: 600;
	padding: 0 3.5rem;
	border-radius: 5rem;
	height: 4.3rem;

	transition: all 0.3s ease-in-out;

	-webkit-box-shadow: 0px 0px 0px 0px
		${({ theme }) => theme.colors.dark_slate_gray};
	-moz-box-shadow: 0px 0px 0px 0px
		${({ theme }) => theme.colors.dark_slate_gray};
	box-shadow: 0px 0px 0px 0px ${({ theme }) => theme.colors.dark_slate_gray};

	&:hover {
		transform: translateY(-5px);

		-webkit-box-shadow: 0px 8px 0px -3px ${({ theme }) => theme.colors.dark_slate_gray};
		-moz-box-shadow: 0px 8px 0px -3px ${({ theme }) => theme.colors.dark_slate_gray};
		box-shadow: 0px 8px 0px -3px ${({ theme }) => theme.colors.dark_slate_gray};
	}

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.8rem;
		height: 3.5rem;
		padding: 0 3rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.6rem;
		height: 3rem;
		padding: 0 2.5rem;
	}
`;
