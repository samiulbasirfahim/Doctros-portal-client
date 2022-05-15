import { useEffect, useState } from "react"

const useToken = (user) => {
	const [token, setToken] = useState("")
	console.log(user)
	useEffect(() => {
		if (user) {
			fetch("http://localhost:4000/user", {
				method: "put",
				headers: {
					"content-type": "application/json",
					email: user?.email,
				},
				body: JSON.stringify({
					email: user.email,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					setToken(data.token)
					localStorage.setItem("accesToken", data.token)
				})
		}
	}, [user])

	return token
}

export default useToken
