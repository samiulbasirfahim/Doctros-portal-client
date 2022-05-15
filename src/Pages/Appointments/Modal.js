import { format } from "date-fns"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"

const Modal = ({
	modalService: { name, slots = [] },
	date,
	setModalService,
	modalService,
	refetch,
}) => {
	const [user] = useAuthState(auth)
	const handleModalService = (event) => {
		event.preventDefault()
		const bookingInfo = {
			treatment: name,
			name: user.displayName,
			email: user.email,
			slot: event.target.slot.value,
			date: format(date, "PP"),
			phoneNumber: event.target.phoneNumber.value,
		}
		fetch("http://localhost:4000/booking", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				email: user.email,
				authorization: "Bearer " + localStorage.getItem("accesToken"),
			},
			body: JSON.stringify(bookingInfo),
		})
		refetch()
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
						<p>
							<input
								type="text"
								readOnly
								name="date"
								id="date"
								disabled
								value={format(date, "PP")}
								className="input input-bordered w-full"
							/>
						</p>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Full name"
							defaultValue={user.displayName}
							disabled
							className="input input-bordered w-full"
						/>
						<input
							type="text"
							name="userEmail"
							id="userEmail"
							defaultValue={user.email}
							disabled
							placeholder="Email"
							className="input input-bordered w-full"
						/>
						<select
							type="text"
							name="slot"
							className="input input-bordered w-full"
						>
							{slots.map((slot, index) => (
								<option key={index}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							name="phoneNumber"
							id="phoneNumber"
							placeholder="Phone number"
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
