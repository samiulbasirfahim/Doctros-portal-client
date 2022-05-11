import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import Appoinment from "./Appoinment"
import Modal from "./Modal"

const AvailableAppointments = ({ date }) => {
	const [services, setServices] = useState([])
	const [modalService, setModalService] = useState(null)
	useEffect(() => {
		fetch("http://localhost:4000/services")
			.then((res) => res.json())
			.then((data) => setServices(data))
	}, [])
	return (
		<section>
			<p className="text-secondary text-center text-xl my-10">
				Available Appointments on {format(date, "PP")}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service) => (
					<Appoinment
						key={service._id}
						setModalService={setModalService}
						service={service}
					/>
				))}
			</div>
			{services.length === 0 && (
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
