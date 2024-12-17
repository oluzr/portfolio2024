import { CheckboxProp } from './interface';
import * as S from './style';
import { FaCheck } from 'react-icons/fa6';
const Checkbox = ({
	checked,
	name,
	labelName,
	onChangeHandler,
	color = '#2ecc71',
}: CheckboxProp) => {
	return (
		<S.CheckboxStyleContainer $color={color}>
			<input
				type="checkbox"
				name={name}
				id="checkbox-input"
				checked={checked}
				onChange={onChangeHandler}
			/>
			<label htmlFor="checkbox-input">
				<p className={checked ? 'checked' : 'not-checked'}>
					<span>
						<FaCheck />
					</span>
				</p>
			</label>
			{labelName && <p className="label">{labelName}</p>}
		</S.CheckboxStyleContainer>
	);
};

export default Checkbox;
