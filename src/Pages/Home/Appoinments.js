import React from "react"
import ButtonPrimary from "../../Components/ButtonPrimary"
import doctor from "../../assets/images/doctor-small.png"
import appoinmentsbg from "../../assets/images/appointment.png"

const Appoinments = () => {
	return (
		<section
			style={{
				background: `url(${appoinmentsbg})`,
			}}
		>
			<div className=" flex mt-40 flex-col lg:flex-row justify-center items-center px-6 mx-auto container">
				<div className="flex-1 hidden lg:flex justify-end">
					<img
						className="mt-[-200px]"
						src={doctor}
						alt=""
					/>
				</div>
				<div className="flex-1 flex flex-col justify-center  py-8 items-start">
					<p className="text-secondary text-xl font-bold">Appointment</p>
					<p className="text-4xl text-white font-bold">Make an appointment Today</p>
					<p className="text-white mb-4">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsumis
						that it has a more-or-less normal distribution of
						letters,as opposed to using 'Content here, content
						here', making it look like readable English. Many
						desktop publishing packages and web page
					</p>
					<ButtonPrimary>Get started</ButtonPrimary>
				</div>
			</div>
		</section>
	)
}

export default Appoinments
