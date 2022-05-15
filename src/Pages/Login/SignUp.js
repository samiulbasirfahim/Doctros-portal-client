import React, { useState } from "react"
import {
	useAuthState,
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"
import useToken from "../../hooks/useToken"
import SocialLogin from "./SocialLogin"

const SignUp = () => {
	const [showPass, setShowPass] = useState(false)
	const [createUserWithEmailAndPassword, , loading, error] =
		useCreateUserWithEmailAndPassword(auth)
	const [updateProfile, updating] = useUpdateProfile(auth)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {
		createUserWithEmailAndPassword(data.email, data.password).then(() => {
			updateProfile({ displayName: data.name })
		}).then(() => console.log(data.name))
	}

	const [user] = useAuthState(auth)
	const location = useLocation()
	const from = location?.state?.from || "/"
	const navigate = useNavigate()
	const [token] = useToken(user)
	if (token) {
		navigate(from, { replace: true })
	}
	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			{updating && <Spinner />}
			{loading && <Spinner />}
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
					<p className="text-red-500 w-full text-center text-xs">
						{error?.code}
					</p>
				</form>
				<p className="text-sm text-center mt-2">
					Already have an account ?
					<Link
						to="/login"
						state={from}
						className="text-sm text-secondary ml-2"
					>
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
