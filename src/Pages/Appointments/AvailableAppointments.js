import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Spinner from "../../Components/Spinner"
import Appoinment from "./Appoinment"
import Modal from "./Modal"

const AvailableAppointments = ({ date }) => {
	// const [treatments, setTreatments] = useState([])
	const [modalService, setModalService] = useState(null)
	const {
		data: treatments,
		isLoading,
		refetch,
	} = useQuery(["treatments", date], () =>
		fetch(
			`http://localhost:4000/available?date=${format(date, "PP")}`
		).then((res) => res.json())
	)

	console.log(treatments)
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
			{isLoading && <Spinner />}
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
