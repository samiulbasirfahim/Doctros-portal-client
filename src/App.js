import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Appointments from "./Pages/Appointments/Appointments"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import ResetPassword from "./Pages/Login/ResetPassword"
import SignUp from "./Pages/Login/SignUp"
import Footer from "./Shared/Footer"
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
		<section data-theme={theme && "dark"}>
			<Navbar handleThemeChange={handleThemeChange} theme={theme} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/appointment" element={<Appointments />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
			<Footer />

		</section>
	)
}

export default App
