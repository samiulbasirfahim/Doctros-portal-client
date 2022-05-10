import React from "react"
import bg from "../../assets/images/appointment.png"
import ButtonPrimary from "../../Components/ButtonPrimary"
const ContactForm = () => {
	return (
		<section
			style={{
				background: `url(${bg})`,
			}}
			className="py-32"
		>
			<form className="grid justify-items-center gap-6">
				<p className="text-secondary font-semibold text-xl">Contact Us</p>
				<p className="text-white text-3xl">Stay connected with us</p>
				<input
					type="email"
					name="email"
					placeholder="Your email"
					className="lg:w-[450px] w-[350px] rounded h-12 placeholder:text-gray-400 px-6"
				/>
				<input
					type="text"
					name="subject"
					placeholder="Subject"
					className="lg:w-[450px] w-[350px] rounded h-12 placeholder:text-gray-400 px-6"
				/>
				<textarea
					name=""
					id=""
					cols="30"
					rows="5"
					placeholder="Your message"
					className="lg:w-[450px] w-[350px] rounded placeholder:text-gray-400 px-6"
				/>
				<ButtonPrimary>Submit</ButtonPrimary>
			</form>
		</section>
	)
}

export default ContactForm
