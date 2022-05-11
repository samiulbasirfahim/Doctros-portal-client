import React from "react"

const ButtonPrimary = ({ children, className }) => {
	return (
		<button
			class={`btn btn-primary bg-gradient-to-l from-primary to-secondary ${className}`}
		>
			{children}
		</button>
	)
}

export default ButtonPrimary
