import React from "react"

const Service = ({ img, title, description }) => {
	return (
		<div class="card shadow-xl">
			<figure class="px-10 pt-10">
				<img src={img} alt="Shoes" class="rounded-xl" />
			</figure>
			<div class="card-body items-center text-center font-bold">
				<h2 class="card-title text-2xl">{title}</h2>
				<p className="text-gray-600 text-sm">{description}</p>
			</div>
		</div>
	)
}

export default Service
