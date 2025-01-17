import styled from 'styled-components';
import { CheckboxStyleProp } from './interface';
export const CheckboxStyleContainer = styled.div<CheckboxStyleProp>`
	&:has(p.label) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap:10px;
		p{
			font-size: 14px;
			color: #fff;
			font-weight: 400;
		}
	}
	input {
		display: none;
	}
	label {
		cursor: pointer;
		p {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 28px;
			height: 28px;
			border-radius: 7px;
			border: 1px solid #d9d9d9;
			transition: all 0.06s;
			background-color: #fefefe;
			overflow: hidden;
			&.checked {
				background-color: ${(prop) => prop.$color};
				border: 1px solid ${(prop) => prop.$color};
				span {
					opacity: 1;
					transform: translate(-50%, -50%);
					svg,
					path {
						color: #fff;
					}
				}
			}
			&.not-checked {
				span {
					opacity: 0;
					transform: translate(-50%, -80%);
				}
			}
			span {
				position: absolute;
				transition-timing-function: ease-in;
				top: 50%;
				left: 50%;
				transition: transform 0.15s;
			}
		}
	}
`;
