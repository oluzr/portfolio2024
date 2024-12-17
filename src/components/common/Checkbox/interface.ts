export interface CheckboxProp {
	name: string;
	labelName?: string
	checked: boolean;
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	color?: string;
}
export interface CheckboxStyleProp {
	$color: string;
}
