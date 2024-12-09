import styled from 'styled-components';
import { ToggleStyleProp } from './interface';
export const ToggleStyleContainer = styled.div<ToggleStyleProp>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	input {
		display: none;
	}
	ul {
		cursor: pointer;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: ${(prop) => prop.$bgColor};
		padding: 10px;
		border-radius: 30px;
		width: max-content;
		&::before {
			content: '';
			display: block;
			border: 1px solid #fff;
			background-color: #fff;
			border-radius: 30px;
			position: absolute;
			height: calc(100% - 20px);
			left: 10px;
			top: 10px;
			transition: all 0.3s;
			box-shadow: 0 6px 10px -4px #00000047;
		}
		&.checked {
			&::before {
				width: ${(prop) => prop.$option2Size}px;
				left: ${(prop) => prop.$option1Size + 10}px;
			}
			li {
				&:last-child {
					p {
						color: rgb(66, 38, 18);
					}
				}
			}
		}
		&.not-checked {
			&::before {
				width: ${(prop) => prop.$option1Size}px;
				left: 10px;
			}
			li {
				&:first-child {
					p {
						color: rgb(66, 38, 18);
					}
				}
			}
		}
		li {
			position: relative;
			padding: 10px 20px;
			p {
				color: #fff;
				transition: all 0.2s;
				/* width: max-content; */
				text-align: center;
			}
		}
	}
`;
