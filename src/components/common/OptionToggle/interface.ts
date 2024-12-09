export interface ToggleProp {
	isClicked: boolean;
	setClicked: React.Dispatch<React.SetStateAction<boolean>>;
	option1: ToggleOption;
	option2: ToggleOption;
	bgColor?: string;
}
interface ToggleOption {
	text: string;
}
export interface ToggleStyleProp {
	$option1Size: number;
	$option2Size: number;
	$bgColor: string;
}
