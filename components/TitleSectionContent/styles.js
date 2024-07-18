import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
`;

export const Title = styled.h2`
	font-size: 7rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.tertiary};

	&::after {
		content: "";
		display: block;
		width: 8rem;
		height: 0.8rem;
		background-color: ${({ theme }) => theme.colors.secondary};
		margin-top: -5px;

		@media ${({ theme }) => theme.device.laptopL} {
			width: 7rem;
			height: 0.7rem;
		}
		@media ${({ theme }) => theme.device.laptop} {
			width: 6rem;
			height: 0.6rem;
		}
		@media ${({ theme }) => theme.device.tablet} {
			width: 5rem;
			height: 0.5rem;
		}
		@media ${({ theme }) => theme.device.mobileL} {
			width: 4rem;
			height: 0.4rem;
		}
	}

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 6rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 5rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 4.5rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 4rem;
	}
`;

export const Symbol = styled(Image)`
	width: 4.1rem;
	height: auto;
	padding-top: 1rem;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 3.5rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 2.8rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 2.3rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 2rem;
	}
`;
