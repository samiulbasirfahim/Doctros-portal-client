import React from "react"
import treatment from "../../assets/images/treatment.png"
import ButtonPrimary from "../../Components/ButtonPrimary"

const ServiceBanner = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row mt-12">
				<img
					src={treatment}
					alt="treatment"
					className="rounded-lg lg:max-w-lg"
				/>
				<div className=" px-0 lg:px-6">
					<h1 className="lg:text-5xl text-4xl  font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
					<p className="py-6">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
					</p>
					<ButtonPrimary>Get started</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}

export default ServiceBanner
