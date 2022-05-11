import React from "react"
import chair from "../../assets/images/chair.png"
import bannerBg from "../../assets/images/bg.png"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
const AppointmentsBanner = ({ setDate, date }) => {
	return (
		<section>
			<div
				className="hero min-h-screen bg-cover bg-center bg-blend-overlay pt-[100px`]"
				style={{
					background: `url(${bannerBg})`,
				}}
			>
				<div class="hero-content lg:w-1/2 justify-between flex-col lg:flex-row-reverse">
					<img
						src={chair}
						class={`lg:max-w-lg max-w-xs rounded-lg`}
						alt=""
					/>
					<DayPicker
						mode="single"
						selected={date}
						onSelect={setDate}
					/>
				</div>
			</div>
		</section>
	)
}

export default AppointmentsBanner
