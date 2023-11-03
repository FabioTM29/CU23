import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowPost from './Pages/ShowPost/ShowPost';
import ValidatePost from './Pages/ValidatePost/ValidatePost';

const App = () => {
	// posts={[]} = valor inicial
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/showPost' element={<ShowPost posts={[]} />}></Route>
					<Route path='/validatePost' element={<ValidatePost />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;
