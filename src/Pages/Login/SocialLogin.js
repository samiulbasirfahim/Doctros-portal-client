import React from "react"
import auth from "../../firebase.init"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import Spinner from "../../Components/Spinner"

const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
	if (loading) {
		return <Spinner />
	}
	return (
		<div>
			<button
				class="btn btn-outline hover:bg-accent w-full"
				onClick={() => signInWithGoogle()}
			>
				Continue with google
			</button>
		</div>
	)
}

export default SocialLogin
