import React from "react"

const BannerCard = ({ img, title, description, bg }) => {
	return (
		<div
			className={
				"flex flex-col lg:flex-row justify-center py-4 lg:justify-between items-center rounded-2xl lg:px-[30px] text-white " +
				bg
			}
		>
			<figure>
				<img className="w-[86px]" src={img} alt="Movie" />
			</figure>
			<div className="py-2 lg:py-6 px-6">
				<h2 className="font-bold text-xl">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default BannerCard
