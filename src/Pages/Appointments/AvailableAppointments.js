import { format } from "date-fns"
import { signOut } from "firebase/auth"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"
import Appoinment from "./Appoinment"
import Modal from "./Modal"

const AvailableAppointments = ({ date }) => {
	const navigate = useNavigate()
	const [user] = useAuthState(auth)
	// const [treatments, setTreatments] = useState([])
	const [modalService, setModalService] = useState(null)
	const {
		data: treatments,
		isLoading,
		refetch,
	} = useQuery(["treatments", date], () =>
		fetch(`http://localhost:4000/available?date=${format(date, "PP")}`, {
			headers: {
				"Content-Type": "application",
				authorization: "Bearer " + localStorage.getItem("accesToken"),
				email: user.email,
			},
		}).then((res) => {
			if (res.status === 401 || res.status === 403) {
				signOut(auth)
				navigate("/login")
			}
			return res.json()
		})
	)

	console.log(treatments)
	if (isLoading) {
		return <Spinner />
	}
	return (
		<section>
			<p className="text-secondary text-center lg:text-xl text-sm my-10">
				Available Appointments on {format(date, "PP")}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{treatments &&
					treatments.map((treatment) => (
						<Appoinment
							key={treatment._id}
							setModalService={setModalService}
							service={treatment}
						/>
					))}
			</div>

			{modalService && (
				<Modal
					refetch={refetch}
					modalService={modalService}
					date={date}
					setModalService={setModalService}
				/>
			)}
		</section>
	)
}

export default AvailableAppointments
