import React from "react"

function Students({ students }) {
	return (
		<div>
			{students.map((aStudent) => {
				return <h3>{aStudent}</h3>
			})}
		</div>
	)
}

export default Students
