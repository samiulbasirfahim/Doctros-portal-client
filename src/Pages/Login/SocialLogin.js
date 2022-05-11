import React from "react"
import auth from "../../firebase.init"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import Spinner from "../../Components/Spinner"

const SocialLogin = () => {
	const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth)

	return (
		<div>
			{loading && <Spinner />}
			<button
				class="btn btn-outline hover:bg-accent w-full"
				onClick={() => signInWithGoogle()}
			>
				Continue with google
			</button>
			{error && (
				<p className="text-red-500 w-full text-center text-xs">
					{error?.code}
				</p>
			)}
		</div>
	)
}

export default SocialLogin
