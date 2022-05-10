import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./Pages/Home/Footer"
import Home from "./Pages/Home/Home"
import Navbar from "./Shared/Navbar"

function App() {
	const [theme, setTheme] = useState(false)
	useEffect(() => {
		setTheme(JSON.parse(window.localStorage.getItem("theme")))
	}, [])

	const handleThemeChange = () => {
		setTheme(!theme)
		window.localStorage.setItem("theme",!theme)
	}

	return (
		<section data-theme={theme && "business"}>
			<Navbar handleThemeChange={handleThemeChange} theme={theme} />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</section>
	)
}

export default App
