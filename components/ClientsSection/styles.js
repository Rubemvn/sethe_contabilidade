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
