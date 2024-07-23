import styled from "styled-components";

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
	/* gap: 5rem; */
	width: 90%;
	text-align: center;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 95%;
		/* gap: 4rem; */
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 95%;
		/* gap: 3rem; */
	}
`;

export const ServicesContent = styled.div``;
export const Services = styled.div``;
export const Service = styled.div``;
export const TextSection = styled.div``;
export const Symbols = styled.div``;
