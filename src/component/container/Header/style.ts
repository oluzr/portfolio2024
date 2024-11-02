import styled from 'styled-components';
export const HeaderWrapper = styled.header`
	display: flex;
	position: fixed;
	width: fit-content;
	top: 20px;
	right: 20px;

	.head_inner {
		& > ul.main_cate {
			display: flex;
			flex-direction: row;
			gap: 0 20px;
			padding: 0 50px;
			background-color: #fff;
			border-radius: 30px;
			& > li {
				& > a {
					position: relative;
					display: flex;
					padding: 20px 0px;
					font-size: 16px;
					font-weight: 600;
					color: var(--text-color);
					&:hover {
						&::after {
							width: 100%;
						}
					}
					&::after {
						content: '';
						display: block;
						background-color: var(--main-color);
						width: 0%;
						height: 4px;
						position: absolute;
						left: 0;
						bottom: 0;
						transition: all 0.3s;
						transform-origin: center center;
					}
				}
			}
		}
	}
`;
