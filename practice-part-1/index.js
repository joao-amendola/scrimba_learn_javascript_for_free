// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

const firstName = 'João Guilherme'
const lastName = 'Moraes Amendola'
concatenatedStr = `${firstName} ${lastName}`
console.log(concatenatedStr)


// Create a function that logs out "Hi there, Linda!" when called

let namE = "Linda"
let greeting = "Hi there"

function greetLinda() {
    console.log(greeting + ', ' + namE + '!')
}

greetLinda()


// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let myPoints = 3

const add3Points = () => {
    myPoints += 3
}

const remove1Point = () => {
    myPoints -= 1
}

add3Points()
remove1Point()
// Call the functions to that the line below logs out 10
console.log(myPoints)