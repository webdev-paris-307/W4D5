import React from "react"
import { Link, NavLink } from "react-router-dom"

/**
 * Link is a component allowing us to link to a ressource
 * NavLink are the same except that they allow for easy styling
 */
function NavBar() {
	return (
		<nav
			style={{
				display: "flex",
				gap: "2rem",
			}}>
			<NavLink
				// className={({ isActive }) => (isActive ? "hello" : "unactive")}
				to="/">
				Home
			</NavLink>

			<NavLink to="/about">About us</NavLink>

			<NavLink to="/fehzbgbz">Error</NavLink>
			<NavLink to="/students">Students</NavLink>
		</nav>
	)
}

export default NavBar
