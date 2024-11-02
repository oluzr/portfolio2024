import { Link } from 'react-router-dom';
import * as S from './style';
const Header = () => {
	return (
		<S.HeaderWrapper>
			<div className="head_inner">
				<ul className="main_cate">
					<li>
						<Link to={'/'}>about</Link>
					</li>
					<li>
						<Link to={'/'}>works</Link>
					</li>
					<li>
						<Link to={'/'}>contact</Link>
					</li>
				</ul>
			</div>
		</S.HeaderWrapper>
	);
};

export default Header;
