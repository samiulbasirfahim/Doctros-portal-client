import React from "react"

const BannerCard = ({ img, title, description, bg }) => {
	console.log(img)
	return (
		<div
			class={
				"flex flex-col lg:flex-row justify-center py-4 lg:justify-between items-center rounded-2xl lg:px-[30px] text-white shadow-xl  " +
				bg
			}
		>
			<figure>
				<img className="lg:w-[66px] w-[30px]" src={img} alt="Movie" />
			</figure>
			<div class="py-2 lg:py-6">
				<h2 class="font-bold text-xl">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default BannerCard
