export interface CircleToggleProp {
	isClicked: boolean;
	setClicked: React.Dispatch<React.SetStateAction<boolean>>;
	bgColor?: string;
}

export interface CircleToggleStyleProp {
	$bgColor: string;
}
