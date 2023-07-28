import React from "react"
import { useParams } from "react-router-dom"
function OneStudent({ students }) {
	const params = useParams()
	const studentToDisplay = students.find(
		(student) => student.name === params.nameSlug
	)
	return (
		<div>
			{studentToDisplay.name} {studentToDisplay.icon}
		</div>
	)
}

export default OneStudent
