import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(app);
}
