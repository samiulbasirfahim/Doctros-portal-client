import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import SocialLogin from "./SocialLogin"

const SignUp = () => {
	const [showPass, setShowPass] = useState(false)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => console.log(data, errors)
	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			<div className="shadow-2xl py-12 px-8 rounded-2xl lg:w-3/12 ">
				<form
					className="grid grid-cols-1 gap-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<p className="text-center w-full pb-8 font-bold text-xl">
						Sign Up
					</p>
					<p className="flex flex-col">
						<label htmlFor="email">Full name</label>
						<input
							type="text"
							name="name"
							id="name"
							class="input input-bordered w-full"
							{...register("name", {
								required: {
									value: true,
									message: "Please input your name",
								},
							})}
						/>
						<p className="text-red-700">
							<small>{errors?.name?.message}</small>
						</p>
					</p>
					<p className="flex flex-col">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							class="input input-bordered w-full"
							{...register("email", {
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message:
										"Please provide a valid email address",
								},
								required: {
									value: true,
									message: "Please input your email address",
								},
							})}
						/>
						<p className="text-red-700">
							<small>{errors?.email?.message}</small>
						</p>
					</p>
					<p className="flex flex-col">
						<label htmlFor="password">Password</label>
						<input
							type={showPass ? "text" : "password"}
							name="password"
							id="password"
							class="input input-bordered w-ful"
							{...register("password", {
								minLength: {
									value: 6,
									message:
										"Your password must be at least 6 characters",
								},
								required: {
									value: true,
									message: "Please input your password",
								},
							})}
						/>
						<p className="text-red-700">
							<small>{errors?.password?.message}</small>
						</p>
					</p>

					<input
						type="submit"
						value="Sign Up"
						className="btn w-full"
					/>
				</form>
				<p className="text-sm text-center mt-2">
					Already have an account ?
					<Link to="/login" className="text-sm text-secondary ml-2">
						Please login
					</Link>
				</p>
				<div class="divider mt-4">OR</div>
				<SocialLogin />
			</div>
		</div>
	)
}

export default SignUp
