import "./App.css"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Private from "./pages/Private"
import Students from "./pages/Students"
import { useState } from "react"

function App() {
	const [students, setStudents] = useState([
		"Toto",
		"Bob",
		"Alice",
		"John",
		"Marie",
	])
	return (
		<>
			<NavBar />
			<h1>Hello there</h1>

			{/*
     Steps needed to create Routing:
     npm i react-router-dom
     use the BrowserRouter from react-router-dom need to wrap your application
      use Routes
      completed by individual Route
      */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/private" element={<Private />} />
				<Route path="/students" element={<Students students={students} />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
