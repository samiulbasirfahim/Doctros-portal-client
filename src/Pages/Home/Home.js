import React from "react"
import Banner from "./Banner"
import BannerCard from "./BannerCard"
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Home = () => {
	return (
		<section className="container mx-auto">
			<Banner />
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
		</section>
	)
}

export default Home
