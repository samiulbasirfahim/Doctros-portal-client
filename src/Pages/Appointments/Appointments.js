import React, { useState } from "react"
import AppointmentsBanner from "./AppoinemtsBanner"
import AvailableAppointments from "./AvailableAppointments"

const Appointments = () => {
	const [date, setDate] = useState(new Date())
	return (
		<section>
			<AppointmentsBanner setDate={setDate} date={date} />
			<div className="container mx-auto">
				<AvailableAppointments date={date} />
			</div>
		</section>
	)
}

export default Appointments
