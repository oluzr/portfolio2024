import { useEffect, useRef, useState } from 'react';
import { ToggleProp } from './interface';
import * as S from './style';
const Toggle = ({
	isClicked,
	setClicked,
	option1,
	option2,
	// bgColor = '#f4a000',
	bgColor = '#34C759',
}: ToggleProp) => {
	const $option1 = useRef<HTMLLIElement | null>(null);
	const $option2 = useRef<HTMLLIElement | null>(null);
	const [optionsSize, setOptionsSize] = useState({ option1: 0, option2: 0 });
	useEffect(() => {
		if (!$option1.current || !$option2.current) return;
		setOptionsSize({
			option1: $option1.current?.clientWidth,
			option2: $option2.current?.clientWidth,
		});
	}, []);
	return (
		<S.ToggleStyleContainer
			$option1Size={optionsSize.option1}
			$option2Size={optionsSize.option2}
			$bgColor={bgColor}
		>
			<input
				id="toggle"
				type="checkbox"
				onChange={(e) => setClicked(e.target.checked)}
			/>
			<label htmlFor="toggle">
				<ul className={isClicked ? 'checked' : 'not-checked'}>
					<li ref={$option1}>
						<p>{option1.text}</p>
					</li>
					<li ref={$option2}>
						<p>{option2.text}</p>
					</li>
				</ul>
			</label>
		</S.ToggleStyleContainer>
	);
};

export default Toggle;
