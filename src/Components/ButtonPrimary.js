import React from "react"

const ButtonPrimary = ({ children }) => {
	return (
		<button class="btn btn-primary bg-gradient-to-l from-primary to-secondary">
			{children}
		</button>
	)
}

export default ButtonPrimary
