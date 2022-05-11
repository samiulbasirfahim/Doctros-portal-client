import React from "react"

const Appoinment = ({ service: { name, slots }, setModalService, service }) => {
	return (
		<div className="card-body shadow-xl rounded-2xl bg-base-100">
			<h2 className="text-secondary font-bold text-center text-2xl w-full">
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
				<label
					disabled={!slots.length > 0}
					htmlFor="my-modal-6"
					onClick={() => setModalService(service)}
					className="btn btn-md btn-primary bg-gradient-to-l from-primary to-secondary text-white"
				>
					{slots.length === 0 ? 'not available' : 'Book now'}
				</label>
			</div>
		</div>
	)
}

export default Appoinment
