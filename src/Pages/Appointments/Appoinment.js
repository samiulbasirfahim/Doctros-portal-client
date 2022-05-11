import React from "react"
import ButtonPrimary from "../../Components/ButtonPrimary"

const Appoinment = ({ service: { name, slots } }) => {
	return (
		<div class="card-body shadow-xl rounded-2xl bg-base-100">
			<h2 class="text-secondary font-bold text-center text-2xl w-full">
				{name}
			</h2>
			{slots.length > 0 ? (
				<p className="text-center  py-2">{slots[0]}</p>
			) : (
				<p className="text-red-600 text-center  py-2">
					No slot Available
				</p>
			)}
			<p className="text-center py-2">
				{slots.length} {slots.length > 1 ? "spaces" : "space"} available
			</p>
			<div className="flex justify-center w-full">
				<button
					disabled={!slots.length > 0}
					class={`btn btn-primary bg-gradient-to-l from-primary to-secondary`}
				>
					Book appointment
				</button>
			</div>
		</div>
	)
}

export default Appoinment
