import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	position: relative;
	width: 1.2rem;
	justify-content: center;
	align-items: center;
	height: 4rem;

	cursor: pointer;

	@media ${({ theme }) => theme.device.laptopL} {
		scale: 0.9;
	}

	@media ${({ theme }) => theme.device.laptop} {
		scale: 0.8;
	}
`;

export const BGToggle = styled.div`
	width: 0.6rem;
	height: 3rem;
	background-color: ${({ theme }) => theme.colors.tertiary};
	border-radius: 1rem;
`;

export const ButtonToggle = styled.div`
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 2rem;
	position: absolute;
	top: 0;
	background-color: ${({ theme }) => theme.colors.secondary};
`;
