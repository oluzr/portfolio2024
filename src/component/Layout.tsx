import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<header>i'm header</header>
			<Outlet />
		</>
	);
};

export default Layout;
