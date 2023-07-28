import React from "react"
import { Link, Outlet } from "react-router-dom"
function AllStudents({ students }) {
	return (
		<>
			<Outlet />
			{students.map((student, i) => {
				return (
					<Link key={i} to={student.name}>
						{student.name}
					</Link>
				)
			})}
		</>
	)
}

export default AllStudents
