import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function Private() {
	const [isAdmin, setAdmin] = useState(false)

	if (!isAdmin) {
		// return <div>You are not authentified</div>
		return <Navigate to={"/"} />
	} else {
		return <div>Welcome to the secret place</div>
	}
}

export default Private
