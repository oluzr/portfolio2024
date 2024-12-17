import styled from 'styled-components';
export const NoImageStyleContainer = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	border-radius: 10px;
	background-color: #e8e8e8;

	span {
		font-size: 20px;
		color: #fff;
		font-weight: 600;
	}
	svg {
		width: 50%;
		height: 50%;
		color: #fff;
	}
`;
