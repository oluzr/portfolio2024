import { CircleToggleProp } from './interface';
import * as S from './style';
const CircleToggle = ({
	isClicked,
	setClicked,
	bgColor = '#34C759',
}: CircleToggleProp) => {
	return (
		<S.CircleStyleContainer $bgColor={bgColor}>
			<div className="inner">
				<input
					type="checkbox"
					id="circle-toggle"
					checked={isClicked}
					onChange={(e) => setClicked(e.target.checked)}
				/>
				<label htmlFor="circle-toggle">
					<p className={isClicked ? 'checked' : 'not-checked'}>
						<span></span>
					</p>
				</label>
			</div>
		</S.CircleStyleContainer>
	);
};

export default CircleToggle;
