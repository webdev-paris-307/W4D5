/**
 * Destructuring
 */

const person = {
	name: "Toto",
	age: 33,
	address: {
		city: "Paris",
		postalColde: "75020",
	},
	hobbies: ["Cook", "Skate", "Sleeping"],
}

/**
 * theBestHobby => Skate
 */

const {
	hobbies: [, theBestHobby, unknownHobby = "Coding"],
} = person

console.log(theBestHobby, unknownHobby)

const name = person.name
const personAge = person.age

/**
 * Renaming a key:
 * key : nameOfTheVariable
 */
const { name: theNameOfThatPerson, age } = person
console.log(theNameOfThatPerson, age)

const {
	address: { postalColde: postalCode },
} = person

/**
 * Destructuring with Arrays
 */
const arrayOfElements = ["giraffe", "dog", "parrot", "cat", "mouse"]
const vehicules = ["car", "bike", "rollerblades"]

/**
 * Spread, to get the last 3 elements
 */

/**
 * Python 🐍
 */

// arrayOfElements[-1::-1]

// const newArray = arrayOfElements[-1::-2]

const [, , ...otherAnimals] = arrayOfElements
console.log(otherAnimals)

// console.log(postalColde)
console.log(postalCode)

const [firstElement, , parrotElement] = arrayOfElements

const mergedArrays = [
	...vehicules,
	"A random value",
	...arrayOfElements,
	"an other random value",
]

console.log(mergedArrays)

/**
 * <FoodBox food={food} handleDelete={handleDelete} />
 */

function FoodBox({ food, handleDelete }) {}
