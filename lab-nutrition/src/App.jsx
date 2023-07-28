import "./App.css"
import foodsJson from "./foods.json"
import { Row, Divider } from "antd"

import { useState } from "react"
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
import Search from "./components/Search"

function App() {
	const [foods, setFoods] = useState(foodsJson)

	const [searchString, setSearchString] = useState("")

	function handleDelete(id) {
		setFoods(foods.filter((food) => food.id !== id))
	}

	function addFood(food) {
		console.log("Into addFood")
		setFoods([...foods, food])
		// const copy = [...foods]
		// copy.push(food)
		// setFoods(copy)
	}

	console.log(searchString)

	let foodToDisplay

	if (!searchString) {
		foodToDisplay = foods
	} else {
		foodToDisplay = foods.filter((food) =>
			food.name.toLowerCase().includes(searchString.toLowerCase())
		)
	}

	return (
		<div className="App">
			<AddFoodForm miam={addFood} />

			<Search searchString={searchString} handleSearch={setSearchString} />
			{/* Display Search component here */}

			<Divider>Food List</Divider>

			<Row style={{ width: "100%", justifyContent: "center" }}>
				{foodToDisplay.map((food) => {
					const props = {
						key: food.id,
						food: food,
						handleDelete: handleDelete,
					}
					return FoodBox(props)
					// <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
				})}
			</Row>
		</div>
	)
}

export default App
