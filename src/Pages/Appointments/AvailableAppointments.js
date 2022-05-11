import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import Appoinment from "./Appoinment"

const AvailableAppointments = ({ date }) => {
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch("services.json")
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
					<Appoinment key={service._id} service={service} />
				))}
			</div>
		</section>
	)
}

export default AvailableAppointments
