import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { Link, useLocation } from "react-router-dom"
import auth from "../../firebase.init"

const ResetPassword = () => {
	const location = useLocation()
	const from = location?.state?.from || "/"
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {}
	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			<div className="shadow-2xl py-12 px-8 rounded-2xl lg:w-3/12 ">
				<form
					className="grid grid-cols-1 gap-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<p className="text-center w-full pb-8 font-bold text-xl">
						Reset password
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
					<input
						type="submit"
						value="Reset email"
						className="btn w-full"
					/>
					<p className="text-red-500 w-full text-center text-xs"></p>
				</form>
				<p className="text-sm text-center mt-2">
					Remember your password ?
					<Link
						to="/login"
						state={from}
						className="text-sm text-secondary ml-2"
					>
						Please login
					</Link>
				</p>
			</div>
		</div>
	)
}

export default ResetPassword
