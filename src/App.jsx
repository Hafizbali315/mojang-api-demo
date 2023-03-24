import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/index.scss'
import Home from './Pages/Home'
import Players from './Pages/Players'
import Theme from './Pages/Theme'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="" element={<Theme />}>
						<Route index element={<Home />} />
						<Route path="/players" element={<Players />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
