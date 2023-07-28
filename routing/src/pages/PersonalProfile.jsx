import React from "react"
import { useParams } from "react-router-dom"

function PersonalProfile() {
	const params = useParams()
	console.log(params)
	document.title = params.slug + "'s profile"
	return <div>This is {params.slug}'s profile</div>
}

export default PersonalProfile
