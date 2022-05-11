import React from "react"

const Service = ({ img, title, description }) => {
	return (
		<div className="card shadow-xl max-w-sm">
			<figure className="px-10 pt-10">
				<img src={img} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center font-bold">
				<h2 className="card-title text-2xl">{title}</h2>
				<p className="text-gray-600 text-sm">{description}</p>
			</div>
		</div>
	)
}

export default Service
