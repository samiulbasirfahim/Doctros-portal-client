import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<div>
			<div class="drawer drawer-mobile">
				<input
					id="my-drawer-2"
					type="checkbox"
					class="drawer-toggle "
				/>
				<div class="drawer-content mt-16 flex justify-between container px-6">
					<div className="w-full">
						<p className="text-4xl text-secondary font-bold pb-4">
							Dashboard
						</p>
						<Outlet />
					</div>
					<div className="">
						<label
							for="my-drawer-2"
							class="drawer-button lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-10 h-10 absolute right-0 stroke-current"
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
				</div>
				<div class="drawer-side">
					<label for="my-drawer-2" class="drawer-overlay"></label>
					<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
						<li>
							<Link to={"/dashboard"}>Appointments</Link>
						</li>
						<li>
							<Link to={"/dashboard/reviews"}>Reviews</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
