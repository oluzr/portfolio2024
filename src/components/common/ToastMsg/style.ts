import styled, { css } from 'styled-components';
import { ToastMsgStyleProp } from './interface';
export const ToastMsgStyleContainer = styled.div<ToastMsgStyleProp>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	position: fixed;
	left: 50%;
	top: 2%;
	transform: translateX(-50%);
	border-radius: 16px;
	opacity: 0;
	transition: all 0.4s;
	width: 80%;
	padding: 17px 20px;

	${(prop) =>
		prop.$isVisible &&
		css`
			top: 6%;
			opacity: 1;
		`}
	${(prop) =>
		prop.$type === 'error' &&
		css`
			background-color: #ff5861;
		`}
	${(prop) =>
		prop.$type === 'info' &&
		css`
			background-color: #f2f2f2;
			box-shadow: 2px 5px 20px -2px #00000015;
		`}
	${(prop) =>
		prop.$type === 'success' &&
		css`
			background-color: #00b5ff;
		`}
	${(prop) =>
		prop.$type === 'warning' &&
		css`
			background-color: #ffbe00;
		`}
	.toast-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			width: 25px;
			height: 25px;
			color: #000;
			${(prop) =>
				prop.$type === 'info' &&
				css`
					color: #00b5ff;
				`};
		}
	}
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
