import React from "react"
import chair from "../../assets/images/chair.png"
import bannerBg from "../../assets/images/bg.png"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
const AppointmentsBanner = ({ setDate, date }) => {
	return (
		<section>
			<div
				className={`hero min-h-screen just bg-cover bg-center bg-blend-overlay pt-[100px] lg:bg-[url(https://i.ibb.co/Pwy9dBL/bg.png)]`}
			>
				<div className="hero-content flex-col lg:flex-row-reverse justify-between">
					<img
						src={chair}
						className={`lg:max-w-lg max-w-xs rounded-lg`}
						alt=""
					/>
					<div>
						<DayPicker
							mode="single"
							selected={date}
							onSelect={setDate}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AppointmentsBanner
