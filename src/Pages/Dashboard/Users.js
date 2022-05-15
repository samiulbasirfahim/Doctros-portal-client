import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"

const Users = () => {
	const [user] = useAuthState(auth)
	const {
		isLoading,
		refetch,
		data: users,
	} = useQuery("repoData", () =>
		fetch("https://doctors-portal-fahim.herokuapp.com/user", {
			headers: {
				authorization: "Bearer " + localStorage.getItem("accesToken"),
				email: user.email,
			},
		}).then((response) => response.json())
	)

	const makeAdmin = (email) => {
		fetch("https://doctors-portal-fahim.herokuapp.com/admin/" + email, {
			headers: {
				"content-type": "application/json",
				email: user.email,
				authorization: "Bearer " + localStorage.getItem("accesToken"),

			},
			method: "put",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast(`You have add ${email} as a admin`)

					refetch()
				}
			})
	}

	const removeAdmin = (email) => {
		fetch("https://doctors-portal-fahim.herokuapp.com/admin-remove/" + email, {
			headers: {
				"content-type": "application/json",
				email: user.email,
				authorization: "Bearer " + localStorage.getItem("accesToken"),
			},
			method: "put",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast(`${email} has been removed from admin`)
					refetch()
				}
			})
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div>
			<div class="overflow-x-auto h-[80vh]">
				<table class="table w-full">
					<thead className="w-full">
						<tr className="">
							<th></th>
							<th>Email</th>
							<th>+</th>
							<th>x</th>
						</tr>
					</thead>
					<tbody>
						{users.map((a, index) => {
							return (
								<tr>
									<th>{index + 1}</th>
									<td className="font-semibold text-primary">
										{a.email}
									</td>
									<td className="text-green-600 font-semibold">
										{a.role !== "admin" ? (
											<button
												onClick={() =>
													makeAdmin(a.email)
												}
												class="btn btn-wide"
											>
												Make admin
											</button>
										) : (
											<button
												onClick={() =>
													removeAdmin(a.email)
												}
												class="btn btn-wide"
											>
												Remove admin
											</button>
										)}
									</td>
									<td className="font-semibold text-secondary">
										<button class="btn btn-wide">
											Remove users
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Users
