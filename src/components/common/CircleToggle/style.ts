import styled from 'styled-components';
import { CircleToggleStyleProp } from './interface';
export const CircleStyleContainer = styled.div<CircleToggleStyleProp>`
	.inner {
		input {
			display: none;
		}
		label {
			cursor: pointer;
			p {
				position: relative;
				width: 50px;
				height: 32px;
				padding: 4px;
				border-radius: 30px;
				background-color: ${(prop) => prop.$bgColor};
				overflow: hidden;
				transition: all 0.2s;
				span {
					position: absolute;
					top: 4px;
					display: block;
					height: 24px;
					width: 24px;
					background-color: #fff;
					border-radius: 50%;
					transition: all 0.2s;
				}
				&.not-checked {
					filter: opacity(0.88);
					span {
						left: 4px;
					}
				}
				&.checked {
					span {
						box-shadow: 0 3px 8px -2px #00000067;
						left: 22px;
					}
				}
			}
		}
	}
`;
