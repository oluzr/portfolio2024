import { SelectBoxProp } from './interface';
import * as S from './style';
import Select from 'react-select';
const SelectBox = ({
	options,
	isTransparent,
	onChange,
	placeholder = '',
}: SelectBoxProp) => {
	const customStyles_transparent = {
		control: (provided: any) => ({
			...provided,
			backgroundColor: 'transparent',
			border: '1px solid transparent',
		}),
		menu: (provided: any) => ({
			...provided,
			backgroundColor: '#fff',
		}),
		option: (provided: any) => ({
			...provided,
			backgroundColor: 'transparent',
			color: 'black',
			fontSize: '13px',
		}),
		singleValue: (provided: any) => ({
			...provided,
			fontSize: '13px',
			color: 'black',
		}),
		indicatorSeparator: () => ({
			display: 'none',
		}),
		dropdownIndicator: (provided: any) => ({
			...provided,
			color: '#000',
			padding: '0',
			transform: 'scale(.7)',
		}),
		menuList: (provided: any) => ({
			...provided,
			padding: 0,
			border: 'none',
		}),
		placeholder: (provided: any) => ({
			...provided,
			color: '#000',
			fontSize: '13px',
		}),
	};
	const customStyles_2 = {};
	return (
		<S.SelectBoxStyleContainer className={isTransparent ? 'transparent' : ''}>
			<Select
				placeholder={placeholder}
				options={options}
				styles={isTransparent ? customStyles_transparent : customStyles_2}
				onChange={(selectedOption) => {
					onChange({
						target: {
							name,
							value: selectedOption ? selectedOption.value : '',
						},
					} as unknown as React.ChangeEvent<HTMLSelectElement>);
				}}
			/>
		</S.SelectBoxStyleContainer>
	);
};

export default SelectBox;
