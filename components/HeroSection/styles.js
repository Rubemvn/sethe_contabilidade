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
`;

export const WelcomeImage = styled(Image)`
	opacity: 0;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 45rem;
	}
`;

export const WelcomeContainer = styled.div`
	display: flex;
	gap: 2rem;
	width: 50%;
	flex-direction: column;
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

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 6.5rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 5.5rem;
	}
`;

export const TextContainer = styled.p`
	font-size: 2rem;
	width: 100%;
	max-width: 58rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.tertiary};
	opacity: 0;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.6rem;
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
`;

export const SymbolsID = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 3rem;

	@media ${({ theme }) => theme.device.laptop} {
		scale: 0.9;
	}
`;

export const Symbol = styled(Image)`
	opacity: 0;
`;
