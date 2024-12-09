import styled, { css } from 'styled-components';
import { ChatBubbleStyleProp } from './interface';

export const ChatBubbleStyleContainer = styled.div<ChatBubbleStyleProp>`
	width: 100%;
	padding-bottom: 13px;
	display: flex;
	${(prop) =>
		prop.$side === 'left' &&
		css`
			justify-content: flex-start;
		`}
	${(prop) =>
		prop.$side === 'right' &&
		css`
			justify-content: flex-end;
		`}
	.chat-bubble-wrap {
		position: relative;
		padding: 8px 12px 9px;
		border-radius: 13px;
		font-weight: 400;
		font-size: 14px;
		max-width: 60%;
        line-height:1.4;
		${(prop) =>
			prop.$side === 'left' &&
			css`
				background-color: #e5e5ea;
				color: #333;
			`}
		${(prop) =>
			prop.$side === 'right' &&
			css`
				background-color: #007aff;
				color: #fff;
			`}
		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			bottom: -10px;
			${(prop) =>
				prop.$side === 'left' &&
				css`
					left: 6px;
					transform: rotate(20deg);
					border-top: 19px solid #e5e5ea;
				`}
			${(prop) =>
				prop.$side === 'right' &&
				css`
					right: 6px;
					transform: rotate(-20deg);
					border-top:19px solid #007aff;
				`}
		}

		p {
			margin: 0;
		}
	}
`;
