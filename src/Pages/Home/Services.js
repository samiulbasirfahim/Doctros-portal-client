import React from "react"
import Service from "./Service"
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import ServiceBanner from "./ServiceBanner"

const Services = () => {
	return (
		<section className="mt-24">
			<div className="mx-auto text-center font-bold">
				<p className="text-primary text-xl">Our services</p>
				<p className="text-3xl text-accent">Service we provided</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center mt-28">
				<Service
					img={fluoride}
					title="Fluoride Treatment"
					description="lorem ipsum dolor sit amet, consectetur adi lorem "
				/>

				<Service
					img={cavity}
					title="Cavity Filling"
					description="lorem ipsum dolor sit amet, consectetur adi lorem "
				/>

				<Service
					img={whitening}
					title="Teeth Whitening"
					description="lorem ipsum dolor sit amet, consectetur adi lorem lorem ipsum dolor sit amet, consectetur adi lorem lorem ipsum dolor sit amet, consectetur adi lorem "
				/>
			</div>
            <ServiceBanner></ServiceBanner>
		</section>
	)
}

export default Services
