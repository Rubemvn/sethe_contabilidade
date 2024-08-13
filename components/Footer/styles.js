import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-height: 52rem;
	padding: 3rem 0 0 0;
	gap: 3rem;
	background-color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.medium_aquamarine
			: theme.colors.dark_slate_gray};

	@media ${({ theme }) => theme.device.laptopL} {
		padding: 2rem 0 0 0;
	}
	@media ${({ theme }) => theme.device.laptop} {
		/* padding: 4rem 0; */
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	/* display: grid;
	grid-template-columns: repeat(3, 1fr); */
	gap: 2rem;
	width: 95%;
	max-width: 170rem;
	text-align: center;
	justify-content: space-evenly;
	flex-wrap: wrap;

	.container {
		width: 30%;
		min-width: 40rem;
	}

	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		gap: 5rem;

		.container {
			width: 47%;
			min-width: 46rem;
		}
	}
	@media ${({ theme }) => theme.device.laptop} {
		justify-content: center;

		.container {
			width: 100%;
			min-width: auto;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 3rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 4rem;
	}
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
	gap: 2rem;

	@media ${({ theme }) => theme.device.laptopL} {
		align-items: center;
		text-align: center;
	}
	@media ${({ theme }) => theme.device.laptop} {
		gap: 1.5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 1rem;
	}
`;

export const Title = styled.span`
	font-size: 3rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.white};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.6rem;
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
`;

export const Categories = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	@media ${({ theme }) => theme.device.tablet} {
		gap: 2.5rem;
	}
`;

export const Category = styled(Link)`
	text-decoration: none;
	font-size: 2.6rem;
	font-weight: 600;
	color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.dark_slate_gray
			: theme.colors.medium_aquamarine};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.2rem;
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

export const SetheContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 3rem;

	@media ${({ theme }) => theme.device.laptopL} {
		gap: 2.5rem;
	}
`;

export const LogoSethe = styled(Image)`
	width: 24rem;
	height: auto;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 22rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 20rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 18rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 16rem;
	}
`;

export const ButtonContact = styled(Link)`
	color: ${({ theme }) => theme.colors.white};
	border: 3px solid ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3rem;
	padding: 0.8rem 3rem;
	font-weight: 600;
	gap: 1rem;
	font-size: 2.5rem;
	text-decoration: none;
	margin-bottom: -2.3rem;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.2rem;
		padding: 0.6rem 3rem;
		margin-bottom: -3rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2rem;
		padding: 0.5rem 2.5rem;
		margin-bottom: -3.5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.8rem;
		margin-bottom: -4rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.6rem;
	}
`;

export const OpenQuotes = styled.span`
	font-size: 15rem;
	font-weight: 600rem;
	color: ${({ theme }) =>
		theme.title === "light" ? theme.colors.white : theme.colors.rich_black};
	margin-bottom: -11rem;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 15rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 14rem;
		margin-bottom: -10rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 12rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 10rem;
		margin-bottom: -9rem;
	}
`;

export const Phrase = styled.p`
	font-size: 2rem;
	font-weight: 700;
	color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.dark_slate_gray
			: theme.colors.medium_aquamarine};
	margin-bottom: -2rem;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.7rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.6rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.5rem;
	}
`;

export const Author = styled.p`
	font-size: 1.8rem;
	font-weight: 500;
	font-style: italic;
	color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.dark_slate_gray
			: theme.colors.medium_aquamarine};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.6rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.4rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.3rem;
	}
`;

export const Symbols = styled(Image)`
	height: auto;
	margin-bottom: 2rem;
	@media ${({ theme }) => theme.device.laptopL} {
		margin-bottom: 3rem;
		width: 36rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 34rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 32rem;
		margin-bottom: 2.5rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 30rem;
		margin-bottom: 2rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 26rem;
		margin-bottom: 2rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 22rem;
		margin-bottom: 2rem;
	}
`;

export const InfosContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	gap: 2rem;

	@media ${({ theme }) => theme.device.laptopL} {
		align-items: center;
		text-align: center;
	}
`;

export const Contacts = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 2.5rem;

	@media ${({ theme }) => theme.device.laptopL} {
		align-items: center;
		text-align: center;
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 2rem;
	}
`;

export const TitleContact = styled.span`
	font-size: 3rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.white};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.8rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2.6rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 2.4rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 2.2rem;
	}
`;

export const ContactLink = styled(Link)`
	display: flex;
	align-items: center;
	font-size: 2.6rem;
	gap: 1rem;
	font-weight: 600;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	text-align: right;
	user-select: all;

	span {
		font-size: 1.8rem;
		color: ${({ theme }) =>
			theme.title === "light"
				? theme.colors.dark_slate_gray
				: theme.colors.medium_aquamarine};
	}

	@media ${({ theme }) => theme.device.laptopL} {
		text-align: center;
		font-size: 2.4rem;
		gap: 0.8rem;
		span {
			font-size: 1.7rem;
		}
	}
	@media ${({ theme }) => theme.device.laptop} {
		gap: 0.6rem;
		font-size: 2.2rem;
		span {
			font-size: 1.6rem;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 0.5rem;
		font-size: 2rem;
		span {
			font-size: 1.5rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 0.4rem;
		font-size: 1.8rem;
		span {
			font-size: 1.4rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileM} {
		gap: 0.3rem;
		font-size: 1.6rem;
		span {
			font-size: 1.2rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileS} {
		gap: 0.3rem;
		font-size: 1.4rem;
		span {
			font-size: 1rem;
		}
	}
`;

export const TeamContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
	gap: 1rem;

	@media ${({ theme }) => theme.device.laptopL} {
		align-items: center;
		text-align: center;
		gap: 0.7rem;
	}
`;

export const TitleTeam = styled.span`
	font-size: 2.4rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.white};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 2.3rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2.2rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 2.1rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 2rem;
	}
`;

export const Member = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	@media ${({ theme }) => theme.device.laptopL} {
		align-items: center;
	}
`;

export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
	color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.dark_slate_gray
			: theme.colors.medium_aquamarine};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.9rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.7rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.6rem;
	}
`;

export const CRC = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	font-style: italic;
	color: ${({ theme }) => theme.colors.white};

	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 1.4rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.3rem;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	font-size: 1.6rem;
	height: 2.5rem;

	background-color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.dark_slate_gray
			: theme.colors.rich_black};
	color: ${({ theme }) =>
		theme.title === "light"
			? theme.colors.white
			: theme.colors.medium_aquamarine};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.5rem;
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
	@media ${({ theme }) => theme.device.mobileM} {
		font-size: 1.1rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		font-size: 0.8rem;
	}
`;
