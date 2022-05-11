import { format } from "date-fns"
import React from "react"

const Modal = ({
	modalService: { name, slots = [] },
	date,
	setModalService,
	modalService,
}) => {
	const handleModalService = (event) => {
		event.preventDefault()

		console.log(date)
		setModalService(null)
	}
	return (
		<div>
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<label
						htmlFor="my-modal-6"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="font-bold text-lg text-secondary py-4">
						{name}
					</h3>
					<form
						onSubmit={handleModalService}
						className="grid grid-cols-1 gap-y-4"
					>
						<input
							type="text"
							readOnly
							disabled
							value={format(date, "PP")}
							className="input input-bordered w-full"
						/>
						<select
							type="text"
							className="input input-bordered w-full"
						>
							{slots.map((slot, index) => (
								<option key={index}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Full name"
							className="input input-bordered w-full"
						/>
						<input
							type="text"
							placeholder="Phone number"
							className="input input-bordered w-full"
						/>
						<input
							type="text"
							placeholder="Email"
							className="input input-bordered w-full"
						/>
						<input
							type="submit"
							value="Submit"
							className="btn w-full"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Modal
