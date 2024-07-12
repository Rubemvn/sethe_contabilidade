import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 7rem;
	background-color: ${({ theme }) => theme.colors.theme01};
	justify-content: center;
	align-items: center;

	@media ${({ theme }) => theme.device.laptopL} {
		height: 6rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		height: 5rem;
	}
`;

export const Content = styled.div`
	display: flex;
	width: 90%;
	max-width: 1500px;
	justify-content: space-between;
`;

export const LinkLogoImg = styled(Link)``;

export const LogoImg = styled(Image)`
	height: 5rem;
	width: auto;
	@media ${({ theme }) => theme.device.laptopL} {
		height: 4rem;
	}
`;

export const MenuOptions = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export const MenuToggle = styled.div`
	display: none;

	@media ${({ theme }) => theme.device.tablet} {
		height: 2.4rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-between;
		cursor: pointer;

		.line1,
		.line2,
		.line3 {
			border-radius: 1rem;
			height: 0.3rem;
			background-color: ${({ theme }) => theme.colors.theme03};
		}

		.line1 {
			width: 2rem;
		}
		.line2 {
			width: 3.5rem;
		}
		.line3 {
			width: 1.5rem;
		}
	}
`;

export const ListOfLinks = styled.ul`
	display: flex;
	align-items: center;
	gap: 6rem;

	li {
		list-style: none;
	}

	@media ${({ theme }) => theme.device.laptopL} {
		gap: 5rem;
	}
	@media ${({ theme }) => theme.device.laptopL} {
		gap: 4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		display: none;
	}
`;

export const LinkTo = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.tertiary};
	font-size: 2rem;
	font-weight: 500;

	transition: all 0.2s ease-in-out;
	&:hover {
		opacity: 0.9;
	}

	@media ${({ theme }) => theme.device.laptopL} {
		font-size: 1.8rem;
	}
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 1.6rem;
	}
`;
