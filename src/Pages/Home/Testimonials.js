import React from "react"
import quote from "../../assets/icons/quote.svg"
import Testimonial from "./Testimonial"
import man from "../../assets/images/people1.png"

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
			<div className="grid grid-cols-1 lg:grid-cols-3 mt-32 gap-y-12  justify-items-center ">
				<Testimonial
					img={man}
					name="John smith"
					location="kochukhet"
					review={
						"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
					}
				/>
				<Testimonial
					img={man}
					name="John smith"
					location="kochukhet"
					review={
						"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
					}
				/>
				<Testimonial
					img={man}
					name="John smith"
					location="kochukhet"
					review={
						"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
					}
				/>
			</div>
		</section>
	)
}
export default Testimonials
