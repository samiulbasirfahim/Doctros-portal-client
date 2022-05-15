import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"

const MyAppoinments = () => {
	const [myAppoinments, setAppoinments] = useState([])
	const [user] = useAuthState(auth)
	useEffect(() => {
		fetch(`https://doctors-portal-fahim.herokuapp.com/my-appointments?email=${user.email}`, {
			headers: {
				email: user.email,
				authorization: "Bearer " + localStorage.getItem("accesToken"),
			},
		})
			.then((response) => response.json())
			.then((data) => setAppoinments(data))
	}, [])
	return (
		<div>
			<div class="overflow-x-auto h-[80vh]">
				<table class="table w-full">
					<thead className="w-full">
						<tr className="">
							<th></th>
							<th>Name</th>
							<th>Date</th>
							<th>Time</th>
							<th>Treatment</th>
						</tr>
					</thead>
					<tbody>
						{myAppoinments.map((a, index) => {
							return (
								<tr>
									<th>{index + 1}</th>
									<td className="font-semibold text-primary">
										{a.name}
									</td>
									<td className="text-purple-600 font-semibold">
										{a.date}
									</td>
									<td className="text-green-600 font-semibold">
										{a.slot}
									</td>
									<td className="font-semibold text-secondary">
										{a.treatment}
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

export default MyAppoinments
