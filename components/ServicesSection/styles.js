import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 6rem 0;

	@media ${({ theme }) => theme.device.laptopL} {
		padding: 5rem 0;
	}
	@media ${({ theme }) => theme.device.laptop} {
		padding: 4rem 0;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6rem;
	width: 90%;
	max-width: 150rem;
	text-align: center;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		/* gap: 4rem; */
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 3rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 2.5rem;
	}
`;

export const Services = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 7rem;
	width: 100%;

	@media ${({ theme }) => theme.device.laptopL} {
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		gap: 3rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 2rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 1.7rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		gap: 1.5rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		gap: 1.3rem;
	}
`;

export const Service = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	border: 3px solid
		${({ variation, theme }) =>
			variation === "impar" ? theme.colors.secondary : theme.colors.tertiary};
	border-radius: 1rem;
	padding: 2rem;
	gap: 1rem;
	@media ${({ theme }) => theme.device.laptop} {
		padding: 1rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 0.5rem;
		border-width: 2px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 0.8rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		padding: 0.6rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		padding: 0.5rem;
	}
`;

export const ServiceIMG = styled(Image)`
	width: 20rem;
	height: 18rem;

	@media ${({ theme }) => theme.device.laptop} {
		width: 17rem;
		height: 15rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 15rem;
		height: 13rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 13rem;
		height: 11rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 11rem;
		height: 10rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 10rem;
		height: 9rem;
	}
`;

export const ServiceText = styled.span`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${({ variation, theme }) =>
		variation === "impar" ? theme.colors.tertiary : theme.colors.secondary};

	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.9rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.6rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.5rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.4rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.3rem;
	}
`;

export const Symbols = styled(Image)`
	@media ${({ theme }) => theme.device.laptop} {
		width: 40rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 35rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 30rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 27rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 25rem;
	}
`;

export const TextSection = styled.span`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.tertiary};

	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.6rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.5rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.4rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.3rem;
	}
`;
