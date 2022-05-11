import React from "react"

const Testimonial = ({ review, img, name, location }) => {
	return (
		<div className="card max-w-sm  shadow-xl p-8">
			<div className="card-body">
				<p>{review}</p>
			</div>
			<div className="flex justify-center px-4">
				<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<img src={img} className="rounded-full" alt="" />
				</div>
				<div className="pl-6 flex justify-center flex-col">
					<p className="font-bold text-2xl">{name}</p>
					<p>{location}</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
