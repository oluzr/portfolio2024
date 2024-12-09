export interface SelectBoxProp {
	options: SelectOptionItemType[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	// onChange: (e: any) => void;
	placeholder?: string;
	isTransparent?: boolean;
}
export interface SelectOptionItemType {
	value: string | number;
	label: string | number;
}
