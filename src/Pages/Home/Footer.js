import React from "react"
import bg from "../../assets/images/footer.png"

const Footer = () => {
	return (
		<section style={{ background: `url(${bg})`, backgroundPosition:'center', marginTop:'64px' }}>
			<footer class="footer p-10 container mx-auto">
				<div>
					<span class="footer-title">Services</span>
					<a class="link link-hover">Branding</a>
					<a class="link link-hover">Design</a>
					<a class="link link-hover">Marketing</a>
					<a class="link link-hover">Advertisement</a>
				</div>
				<div>
					<span class="footer-title">Company</span>
					<a class="link link-hover">About us</a>new Date.fullYear``
					<a class="link link-hover">Contact</a>
					<a class="link link-hover">Jobs</a>
					<a class="link link-hover">Press kit</a>
				</div>
				<div>
					<span class="footer-title">Legal</span>
					<a class="link link-hover">Terms of use</a>
					<a class="link link-hover">Privacy policy</a>
					<a class="link link-hover">Cookie policy</a>
				</div>
			</footer>

			<div class="items-center grid-flow-col">
				<p className="text-center">Copyright ©{new Date().getFullYear()}- All right reserved</p>
			</div>
		</section>
	)
}

export default Footer
