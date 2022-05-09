import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navbar from "./Shared/Navbar"

function App() {
	return (
		<section>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</section>
	)
}

export default App
