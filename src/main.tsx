import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/theme';
import { GlobalStyle } from 'assets/reset';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</>,
);
