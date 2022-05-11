import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import auth from "../../firebase.init"
import SocialLogin from "./SocialLogin"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import Spinner from "../../Components/Spinner"

const Login = () => {
	const [showPass, setShowPass] = useState(false)

	const [signInWithEmailAndPassword, , loading, error] =
		useSignInWithEmailAndPassword(auth)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {
		signInWithEmailAndPassword(data.email, data.password)
	}

	const [user] = useAuthState(auth)
	const location = useLocation()
	const from = location?.state?.from || "/"
	const navigate = useNavigate()
	if (user) {
		navigate(from, { replace: true })
	}

	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			{loading && <Spinner />}
			<div className="shadow-2xl py-12 px-8 rounded-2xl lg:w-3/12 ">
				<form
					className="grid grid-cols-1 gap-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<p className="text-center w-full pb-8 font-bold text-xl">
						Login
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
					<Link to="/reset-password" className="text-xs text-secondary">
						Forget password ?
					</Link>
					<input type="submit" value="Login" className="btn w-full" />
					<p className="text-red-500 w-full text-center text-xs">
						{error?.code}
					</p>
				</form>
				<p className="text-sm text-center mt-2">
					New to doctors portal ?
					<Link
						to="/sign-up"
						state={from}
						className="text-sm text-secondary ml-2"
					>
						Create new account
					</Link>
				</p>
				<div class="divider mt-4">OR</div>
				<SocialLogin />
			</div>
		</div>
	)
}

export default Login
