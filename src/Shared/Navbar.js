import React from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
	const navItems = (
		<>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive && "bg-accent text-white"
					}
					to="/"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive && "bg-accent text-white"
					}
					to="/about"
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive && "bg-accent text-white"
					}
					to="/appointment"
				>
					Appointments
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive && "bg-accent text-white"
					}
					to="/reviews"
				>
					Reviews
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive && "bg-accent text-white"
					}
					to="/contact-us"
				>
					Contact Us
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive && "bg-accent text-white"
					}
					to="/login"
				>
					Login
				</NavLink>
			</li>
		</>
	)
	return (
		<div class="navbar justify-between bg-base-100 container mx-auto">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
					>
						{navItems}
					</ul>
				</div>
				<Link to="/" class="btn btn-ghost normal-case text-xl font-bold">
					Doctors Portal
				</Link>
			</div>
			<div class="navbar-center hidden lg:flex ">
				<ul class="menu menu-horizontal p-0 font-semibold">{navItems}</ul>
			</div>
		</div>
	)
}

export default Navbar
