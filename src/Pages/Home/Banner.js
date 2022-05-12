import React from "react"
import chair from "../../assets/images/chair.png"
import ButtonPrimary from "../../Components/ButtonPrimary"


const Banner = () => {
	return (
		<section>
			<div
				className={`hero min-h-screen bg-cover bg-center bg-blend-overlay pt-[100px] lg:bg-[url(https://i.ibb.co/Pwy9dBL/bg.png)]`}
				
			>
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={chair}
						className={`lg:max-w-lg max-w-xs rounded-lg`}
						alt=""
					/>
					<div>
						<h1 className="text-5xl font-bold">
							Your New Smile Starts Here
						</h1>
						<p className="py-6">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the
						</p>
						<ButtonPrimary>Get Started</ButtonPrimary>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
