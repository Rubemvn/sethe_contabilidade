import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	padding: 6rem 0;
	justify-content: space-between;
	width: 90%;
	max-width: 150rem;
	height: 100%;
	min-height: 100vh;
	gap: 5rem;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		gap: 2.5rem;
	}

	@media ${({ theme }) => theme.device.tablet} {
		flex-direction: column-reverse;
		justify-content: center;
		gap: 1.5rem;
	}
`;

export const WelcomeImage = styled(Image)`
	opacity: 0;
	height: auto;
	@media ${({ theme }) => theme.device.laptopL} {
		width: 45rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 35rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 30rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 27rem;
	}
`;

export const WelcomeContainer = styled.div`
	display: flex;
	gap: 2rem;
	width: 50%;
	flex-direction: column;
	align-items: flex-start;

	@media ${({ theme }) => theme.device.tablet} {
		align-items: center;
		width: 100%;
	}
`;

export const TitleContainer = styled.div`
	.hidden {
		display: none;
	}
`;

export const Title = styled.h1`
	font-size: 8rem;
	color: ${({ theme }) => theme.colors.tertiary};
	line-height: 8rem;
	font-weight: 800;

	@media ${({ theme }) => theme.device.laptopL} {
		line-height: 7.5rem;
		font-size: 6.5rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 5.5rem;
		line-height: 6.5rem;
	}

	@media ${({ theme }) => theme.device.tablet} {
		text-align: center;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 5rem;
		line-height: 6rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		font-size: 4.5rem;
		line-height: 5.5rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		font-size: 4rem;
		line-height: 5rem;
	}
`;

export const TextContainer = styled.p`
	font-size: 2rem;
	width: 100%;
	max-width: 58rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.tertiary};
	opacity: 0;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.6rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		text-align: center;
		font-size: 1.4rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		font-size: 1.3rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		font-size: 1.2rem;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	opacity: 0;
`;

export const SocialMediaButton = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.6rem;
	height: 100%;
	color: ${({ theme }) => theme.colors.secondary};
	text-decoration: none;
	font-size: 2.5rem;
	font-weight: 900;
	border: 3px solid ${({ theme }) => theme.colors.tertiary};
	background-color: ${({ theme }) => theme.colors.theme01};
	border-radius: 3rem;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2rem;
		padding: 0.5rem;
		border: 2px solid ${({ theme }) => theme.colors.tertiary};
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.8rem;
		padding: 0.4rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		font-size: 1.6rem;
		padding: 0.3rem;
	}
`;

export const SymbolsID = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: flex-start;
	gap: 3rem;
	@media ${({ theme }) => theme.device.mobileS} {
		gap: 2.5rem;
	}
`;

export const Symbol = styled(Image)`
	opacity: 0;
	width: 10rem;
	height: auto;
	@media ${({ theme }) => theme.device.laptopL} {
		width: 8rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 6rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 5.5rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 5rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 4rem;
	}
`;
