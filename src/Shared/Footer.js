import React from "react"
import bg from "../assets/images/footer.png"

const Footer = () => {
	return (
		<section style={{ background: `url(${bg})`, backgroundPosition:'center', marginTop:'64px' }}>
			<footer className="footer p-10 container mx-auto">
				<div>
					<span className="footer-title">Services</span>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<a className="link link-hover">About us</a>new Date.fullYear``
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</div>
			</footer>

			<div className="items-center grid-flow-col">
				<p className="text-center">Copyright ©{new Date().getFullYear()}- All right reserved</p>
			</div>
		</section>
	)
}

export default Footer
