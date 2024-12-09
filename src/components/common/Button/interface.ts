export interface ButtonProp {
	innerTxt: string;
	type?: 'button' | 'submit';
	widthType?: 'full' | 'auto';
	disabled?: boolean;
	useArrow?: boolean;
	styleType?: 'normal' | 'orange' | 'submit' | 'disabled' | 'cancle';
	radius?: '0' | '50%';
	onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
