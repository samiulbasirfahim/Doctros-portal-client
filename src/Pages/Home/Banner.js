import React from "react"
import chair from "../../assets/images/chair.png"
import ButtonPrimary from "../../Components/ButtonPrimary"
// import bannerBg from "../../assets/images/bg.png"
import bannerBg from "../../assets/images/bg.png"

const Banner = () => {
	return (
		<section>
			<div
				className="hero min-h-screen bg-cover bg-center bg-blend-overlay"
				style={{
					background: `url(${bannerBg})`,
				}}
			>
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img
						src={chair}
						class={`lg:max-w-lg rounded-lg shadow-2xl`}
						alt=""
					/>
					<div>
						<h1 class="text-5xl font-bold">
							Your New Smile Starts Here
						</h1>
						<p class="py-6">
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
