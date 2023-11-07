import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowPost from './Pages/ShowPost/ShowPost';
import ValidatePost from './Pages/ValidatePost/ValidatePost';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/showPostAccepted' element={<ShowPost />}></Route>
					<Route path='/showPostInReview' element={<ValidatePost />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;
