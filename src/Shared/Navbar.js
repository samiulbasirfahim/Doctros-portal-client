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
					class="rounded-2xl lg:mx-2 font-bold"
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
			<div class="fixed top-0 w-full z-50">
				<input type="checkbox" class="drawer-toggle" />
				<div class="drawer-content flex flex-col h-[64px] backdrop-blur-[18px] bg-gray-400/80">
					<div class="w-full navbar container  mx-auto">
						<div class="flex-none lg:hidden">
							<label
								for="my-drawer-3"
								class="btn btn-square btn-ghost"
								onClick={() => setMenuOpen(!menuOpen)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="inline-block w-6 h-6 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<div class="flex-1 px-2 mx-2">
							<p className="font-bold text-center lg:text-left lg:w-auto w-full text-2xl">
								Doctors Portal
							</p>
						</div>
						<div class="flex-none hidden lg:block">
							<ul class="menu menu-horizontal font-bold">
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
					<label for="my-drawer-3" class="drawer-overlay"></label>
					<ul class="menu p-4 overflow-y-auto w-80 font-bold h-screen  backdrop-blur-[18px] bg-gray-400/80">
						{navItems}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Navbar
