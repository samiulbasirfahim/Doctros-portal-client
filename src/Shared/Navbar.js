import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaSun, FaMoon } from "react-icons/fa"

const Navbar = ({ handleThemeChange, theme }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const navItems = (
		<>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-accent text-white rounded-2xl"
							: "rounded-2xl lg:mx-2"
					}
					to="/"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-accent text-white rounded-2xl"
							: "rounded-2xl lg:mx-2"
					}
					to="/about"
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-accent text-white rounded-2xl"
							: "rounded-2xl lg:mx-2"
					}
					to="/appointment"
				>
					Appointments
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-accent text-white rounded-2xl"
							: "rounded-2xl lg:mx-2"
					}
					to="/reviews"
				>
					Reviews
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-accent text-white rounded-2xl"
							: "rounded-2xl lg:mx-2"
					}
					to="/contact-us"
				>
					Contact Us
				</NavLink>
			</li>
			<li>
				<button
					onClick={handleThemeChange}
					className="rounded-2xl lg:mx-2 font-bold"
				>
					{theme ? <FaMoon /> : <FaSun />}
				</button>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-accent text-white rounded-2xl"
							: "rounded-2xl lg:mx-2"
					}
					to="/login"
				>
					Login
				</NavLink>
			</li>
		</>
	)
	return (
		<section className="flex justify-center">
			<div className="fixed top-0 w-full z-50">
				<input type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col h-[64px] backdrop-blur-[18px] bg-gray-800/60">
					<div className="w-full navbar container  mx-auto">
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								className="btn btn-square btn-ghost"
								onClick={() => setMenuOpen(!menuOpen)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<div className="flex-1 px-2 mx-2">
							<p className="font-bold text-center lg:text-left lg:w-auto w-full text-2xl">
								Doctors Portal
							</p>
						</div>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal font-bold">
								{navItems}
							</ul>
						</div>
					</div>
				</div>
				<div
					className={`absolute duration-300 ease-linear ${
						menuOpen ? "left-0" : "left-[-100vh]"
					}`}
				>
					<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-80 font-bold h-screen  backdrop-blur-[18px] bg-gray-800/60 dark:bg-red-800">
						{navItems}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Navbar
