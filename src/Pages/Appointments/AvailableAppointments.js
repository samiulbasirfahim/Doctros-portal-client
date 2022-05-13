import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import Spinner from "../../Components/Spinner"
import Appoinment from "./Appoinment"
import Modal from "./Modal"

const AvailableAppointments = ({ date }) => {
	const [treatments, setTreatments] = useState(null)
	const [modalService, setModalService] = useState(null)
	useEffect(() => {
		fetch("http://localhost:4000/treatment")
			.then((res) => res.json())
			.then((data) => setTreatments(data))
	}, [])
	return (
		<section>
			<p className="text-secondary text-center lg:text-xl text-sm my-10">
				Available Appointments on {format(date, "PP")}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{treatments && treatments.map((treatment) => (
					<Appoinment
						key={treatment._id}
						setModalService={setModalService}
						service={treatment}
					/>
				))}
			</div>
			{isNaN(treatments) && <Spinner />}
			{treatments && treatments.length === 0 && (
				<p className="text-red-600 text-center w-full">
					No service available for now
				</p>
			)}
			{modalService && (
				<Modal
					modalService={modalService}
					date={date}
					setModalService={setModalService}
				/>
			)}
		</section>
	)
}

export default AvailableAppointments
