import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../firebase.init"
import Spinner from "./Spinner"

const RequireAuth = ({ children }) => {
	const [user, loadin] = useAuthState(auth)
	const location = useLocation()
	if (loadin) {
		return <Spinner />
	}
	if (user) {
		return children
	} else {
		return <Navigate to={"/login"} state={{ from: location }}></Navigate>
	}
}

export default RequireAuth
