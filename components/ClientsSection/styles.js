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
	gap: 5rem;
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

export const SectionInfosCLients = styled.div`
	display: flex;
	align-items: top;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 3rem;
`;

export const CardInfoClient = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 34rem;
	width: 100%;
	opacity: 0;
`;

export const ImageInfo = styled(Image)`
	width: 14.5rem;
	height: auto;
	margin-bottom: 1.5rem;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 12rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 11rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 10rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 9rem;
	}
`;

export const TitleSectionInfo = styled.span`
	font-size: 2.6rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.tertiary};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.3rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.6rem;
	}
`;

export const DescriptionSectionInfo = styled.span`
	font-size: 1.8rem;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.tertiary};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.6rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.3rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.2rem;
	}
`;

export const Symbols = styled(Image)`
	width: 22rem;
	@media ${({ theme }) => theme.device.laptop} {
		width: 20rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 18rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 16rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 15rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 14rem;
	}
`;

export const ClientsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 5rem;
	width: 80%;
	border: 2px solid
		${({ theme }) =>
			theme.title === "light"
				? theme.colors.dark_slate_gray
				: theme.colors.medium_aquamarine};
	border-radius: 1rem;
	padding: 2rem 0 4rem 0;
	flex-wrap: wrap;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 97%;
		padding: 2rem 1rem 2rem 1rem;
		gap: 3rem;
	}
`;

export const TitleClientsContainer = styled.span`
	font-size: 3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.tertiary};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.7rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2.4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 2.2rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 2rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		font-size: 1.6rem;
	}
`;

export const ClientsLogos = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	gap: 6rem;
	flex-wrap: wrap;
	align-items: center;

	@media ${({ theme }) => theme.device.tablet} {
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		gap: 3rem;
	}
`;

export const Client = styled(Image)`
	width: 10rem;
	height: fit-content;

	@media ${({ theme }) => theme.device.laptop} {
		width: 9rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 8rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 6rem;
	}
`;
