import { Route, Routes } from "react-router-dom"
import Footer from "./Pages/Home/Footer"
import Home from "./Pages/Home/Home"
import Navbar from "./Shared/Navbar"

function App() {
	return (
		<section>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</section>
	)
}

export default App
