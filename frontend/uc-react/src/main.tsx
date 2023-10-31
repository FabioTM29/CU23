import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// llama directamente a userRegister y no a App
const app = <React.StrictMode>
	<App></App> 
</React.StrictMode>;

const container = document.getElementById('root');

if (container != null) {
	ReactDOM.createRoot(container).render(app);
}
