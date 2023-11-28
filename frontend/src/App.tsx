import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Alert } from 'antd';
import { Home, Login, Main, Register, Welcome } from './pages';
import { useSessionHandler } from './hooks/useSessionHandler';
import { useMemo } from 'react';
import ShowPost from './pages/AdoptionPosts/ShowPost/ShowPost';
import ValidatePost from './pages/AdoptionPosts/ValidatePost/ValidatePost';


const { ErrorBoundary } = Alert;
const publicRoute = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />}>
				<Route index element={<Welcome />} />
				<Route path='Register' element={<Register />} />
				<Route path='Login' element={<Login />} />
				
			</Route>
		</Routes>
	);
};
const privateRoute = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/showPostAccepted' element={<ShowPost />}></Route>
			<Route path='/showPostInReview' element={<ValidatePost />}></Route>
		</Routes>
	);
};

const App = () => {
	const { sessionContext, loadSessionFromToken } = useSessionHandler();
	useMemo(() => {
		if (sessionContext == null) {
			loadSessionFromToken();
		}
	}, []);

	return (
		<ErrorBoundary
			description='Something when wrong, please contact an administrator'
			message='An unknown error ocurrs'
		>
			<BrowserRouter>
				{sessionContext == null ? publicRoute() : privateRoute()}
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default App;
