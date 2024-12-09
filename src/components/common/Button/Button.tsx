import { ButtonProp } from './interface';
import * as S from './style';
import { IoIosArrowForward } from 'react-icons/io';
const Button = ({
	innerTxt,
	type = 'button',
	styleType = 'submit',
	disabled = false,
	widthType = 'auto',
	useArrow = false,
	radius = '0',
	onClickHandler,
}: ButtonProp) => {
	return (
		<S.ButtonStyleContainer>
			<button
				className={`${styleType} ${widthType} ${radius === '50%' && 'radius'}`}
				disabled={disabled}
				type={type}
				onClick={onClickHandler}
			>
				{useArrow && <IoIosArrowForward />}
				{innerTxt}
			</button>
		</S.ButtonStyleContainer>
	);
};

export default Button;
