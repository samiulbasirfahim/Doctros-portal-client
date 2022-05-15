import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import RequireAuth from "./Components/RequireAuth"
import auth from "./firebase.init"
import Appointments from "./Pages/Appointments/Appointments"
import Dashboard from "./Pages/Dashboard/Dashboard"
import MyAppoinments from "./Pages/Dashboard/MyAppoinments"
import Users from "./Pages/Dashboard/Users"
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

	const [user] = useAuthState(auth)
	const [isAdmin, setIsAdmin] = useState(false)

	useEffect(() => {
		if (user) {
			fetch("http://localhost:4000/user/" + user.email, {
				headers: {
					authorization:
						"Bearer " + localStorage.getItem("accesToken"),
					email: user.email,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					if (data.role === "admin") {
						setIsAdmin(true)
					} else {
						setIsAdmin(false)
					}
				})
		}
	}, [user])

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
					{isAdmin && (
						<Route path="users" element={<Users />}></Route>
					)}
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
