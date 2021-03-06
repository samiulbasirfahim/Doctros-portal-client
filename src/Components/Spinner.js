import React from "react"
import { ClimbingBoxLoader } from "react-spinners"

const Spinner = () => {
	return (
		<div className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 backdrop-blur-[9px] z-50">
			<ClimbingBoxLoader />
		</div>
	)
}

export default Spinner
