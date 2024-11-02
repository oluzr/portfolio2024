import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/container/Layout/Layout';
import Main from './routes/Main/Main';
import Work from './routes/Works/Work';
import NotFound from './routes/NotFound';
import Project from './routes/Project/:id/Project';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Main />,
				},
				{
					path: 'works',
					element: <Work />,
				},
				{
					path: 'project/:id',
					element: <Project />,
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
