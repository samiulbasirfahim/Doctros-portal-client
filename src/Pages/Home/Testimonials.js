import React from "react"
import quote from "../../assets/icons/quote.svg"

const Testimonials = () => {
	return (
		<section className="flex flex-col justify-between px-6 mt-28 container mx-auto">
			<div className="flex justify-between items-center">
				<div>
					<p className="text-secondary text-xl">Testimonial</p>
					<p className="text-4xl text-accent font-bold">
						What our patients say
					</p>
				</div>
				<div>
					<img className="w-[98px] lg:w-[192px]" src={quote} alt="" />
				</div>
			</div>
			<div></div>
		</section>
	)
}
export default Testimonials
