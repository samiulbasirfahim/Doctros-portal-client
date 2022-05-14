import { useEffect, useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import RequireAuth from "./Components/RequireAuth"
import Appointments from "./Pages/Appointments/Appointments"
import Dashboard from "./Pages/Dashboard/Dashboard"
import MyAppoinments from "./Pages/Dashboard/MyAppoinments"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import ResetPassword from "./Pages/Login/ResetPassword"
import SignUp from "./Pages/Login/SignUp"
import Footer from "./Shared/Footer"
import Navbar from "./Shared/Navbar"

function App() {
	const [theme, setTheme] = useState(
		JSON.parse(window.localStorage.getItem("darkTheme"))
	)
	const handleThemeChange = () => {
		setTheme(!theme)
		window.localStorage.setItem("darkTheme", !theme)
	}

	useEffect(() => {
		console.log(window.appv)
	}, [])

	return (
		<section data-theme={theme && "night"}>
			`` <Navbar handleThemeChange={handleThemeChange} theme={theme} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/appointment"
					element={
						<RequireAuth>
							<Appointments />
						</RequireAuth>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route index element={<MyAppoinments />}></Route>
					<Route path="reviews" ></Route>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
			<Footer />
			<Toaster />
		</section>
	)
}

export default App
