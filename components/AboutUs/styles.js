import Image from "next/image";
import styled from "styled-components";
import { TbTargetArrow } from "react-icons/tb";
import { FaBook } from "react-icons/fa6";

export const Container = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 6rem 0;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	width: 90%;
	text-align: center;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 95%;
		gap: 3rem;
	}
`;

export const OurCardSectionContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	width: 100%;

	@media ${({ theme }) => theme.device.laptopL} {
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		gap: 3rem;
	}
`;

export const OurCardSection = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	gap: 5rem;
	flex-direction: ${({ $side }) => ($side === "left" ? "row" : "row-reverse")};

	@media ${({ theme }) => theme.device.laptopL} {
		gap: 4rem;
	}

	@media ${({ theme }) => theme.device.laptop} {
		gap: 2rem;
	}

	@media ${({ theme }) => theme.device.tablet} {
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
`;

export const CardSectionImage = styled(Image)`
	width: 50%;
	max-width: 75rem;
	height: fit-content;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 40%;
	}
	@media ${({ theme }) => theme.device.laptopL} {
		width: 45%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 65%;
		min-width: 37rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 95%;
		max-width: 37rem;
		min-width: auto;
	}
`;

export const CardSectionInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ $side }) => ($side === "left" ? "flex-start" : "flex-end")};
	text-align: ${({ $side }) => $side};

	h3 {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-weight: 700;
		font-size: 5rem;
		color: ${({ theme }) => theme.colors.tertiary};
	}

	h4 {
		font-size: 3.3rem;
		color: ${({ theme }) => theme.colors.tertiary};
		font-weight: 600;
	}

	p {
		padding: 1rem 0 2rem 0;
		font-size: 2.2rem;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.tertiary};
	}

	@media ${({ theme }) => theme.device.laptopL} {
		h3 {
			font-size: 4rem;
		}
		h4 {
			font-size: 2.5rem;
		}
		p {
			font-size: 1.8rem;
		}
	}

	@media ${({ theme }) => theme.device.laptop} {
		h3 {
			font-size: 3rem;
		}
		h4 {
			font-size: 2rem;
		}
		p {
			padding: 1rem 0 1rem 0;
			font-size: 1.6rem;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		align-items: center;
		text-align: center;
		h3 {
			font-size: 2.6rem;
		}
		h4 {
			font-size: 1.8rem;
		}
		p {
			padding: 0.5rem 0 0.5rem 0;
			font-size: 1.4rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		h3 {
			font-size: 2.4rem;
		}
		h4 {
			font-size: 1.6rem;
		}
		p {
			padding: 0.5rem 0 0.5rem 0;
			font-size: 1.2rem;
		}
	}
`;

export const IconTitleCardSection01 = styled(TbTargetArrow)`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 4rem;

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 3rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2.5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 2.2rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 2.2rem;
	}
`;
export const IconTitleCardSection02 = styled(FaBook)`
	font-size: 4rem;
	color: ${({ theme }) => theme.colors.secondary};

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 3rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2.5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 2.2rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 2.2rem;
	}
`;

export const Symbols = styled(Image)`
	@media ${({ theme }) => theme.device.laptopL} {
		height: auto;
		width: 13rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		height: auto;
		width: 11rem;
	}
`;

export const OurBrand = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 4rem;
	h3 {
		font-size: 3.4rem;
		color: ${({ theme }) => theme.colors.tertiary};
	}

	@media ${({ theme }) => theme.device.laptopL} {
		h3 {
			font-size: 3rem;
		}
	}

	@media ${({ theme }) => theme.device.laptop} {
		h3 {
			font-size: 2.4rem;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		h3 {
			font-size: 2.2rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		h3 {
			font-size: 1.8rem;
		}
	}
`;

export const BrandCards = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: space-evenly;
	width: 100%;
	gap: 2rem;
`;

export const BrandSymbolCard = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 24rem;
	gap: 1rem;
	padding: 1rem 0;

	h4 {
		font-size: 3rem;
		color: ${({ $symbol, theme }) =>
			$symbol === "maior" || $symbol === "multiplique"
				? theme.colors.tertiary
				: theme.colors.secondary};
	}
	p {
		font-size: 1.8rem;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.tertiary};
	}

	@media ${({ theme }) => theme.device.laptopL} {
		h4 {
			font-size: 2.6rem;
		}
		p {
			font-size: 1.6rem;
		}
	}

	@media ${({ theme }) => theme.device.laptop} {
		h4 {
			font-size: 2.4rem;
		}
		p {
			font-size: 1.4rem;
		}
	}

	@media ${({ theme }) => theme.device.tablet} {
		gap: 0.8rem;
		max-width: 46%;
		h4 {
			font-size: 2rem;
		}
		p {
			font-size: 1.2rem;
		}
	}

	@media ${({ theme }) => theme.device.mobileM} {
		max-width: 95%;
	}
`;

export const BrandSymbol = styled(Image)`
	@media ${({ theme }) => theme.device.laptopL} {
		width: 8rem;
		height: auto;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 7rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 6rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 5rem;
	}
`;
