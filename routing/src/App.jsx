import "./App.css"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Private from "./pages/Private"
import Students from "./pages/Students"
import PersonalProfile from "./pages/PersonalProfile"
import OneStudent from "./pages/OneStudent"
import AllStudents from "./pages/AllStudents"
import { useState } from "react"
function App() {
	const [students, setStudents] = useState([
		{ name: "Toto", icon: "😃" },
		{ name: "Bob", icon: "🥳" },
		{ name: "Alice", icon: "🤩" },
		{ name: "John", icon: "🎅" },
		{ name: "Marie", icon: "🤯" },
	])
	return (
		<>
			<NavBar />
			{/* <h1>Hello there</h1> */}

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
				<Route path="/students" element={<AllStudents students={students} />}>
					<Route
						path=":nameSlug"
						element={<OneStudent students={students} />}
					/>
					<Route path=":nameSlug/bio" element={<h1>This is my bio</h1>} />
				</Route>
				{/* <Route path="/students" element={<Students students={students} />} /> */}
				<Route path="/profile/:slug" element={<PersonalProfile />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
