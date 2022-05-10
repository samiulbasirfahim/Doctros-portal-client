import React from "react"
import Banner from "./Banner"
import BannerCard from "./BannerCard"
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"
import Services from "./Services"
import Appoinments from "./Appoinments"
import Testimonials from "./Testimonials"
import ContactForm from "./Contact-Form"

const Home = () => {
	return (
		<>
			<Banner />
			<section className="container px-[25px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<BannerCard
						img={clock}
						title="opening hour"
						description="lorem ipsum dolor sit amet, consectetur adip"
						bg="bg-gradient-to-l from-primary to-secondary"
					></BannerCard>
					<BannerCard
						img={marker}
						title="opening hour"
						description="lorem ipsum dolor sit amet, consectetur adip"
						bg="bg-accent"
					></BannerCard>
					<BannerCard
						img={phone}
						title="opening hour"
						description="lorem ipsum dolor sit amet, consectetur adip"
						bg="bg-gradient-to-l from-primary to-secondary"
					></BannerCard>
				</div>
				<Services />
			</section>
			<Appoinments />
			<Testimonials />
			<ContactForm />
		</>
	)
}

export default Home
