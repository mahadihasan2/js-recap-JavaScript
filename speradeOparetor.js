const numbers = [40, 50, 30, 20, 10]

const newNumber = [...numbers]

numbers.push(55)
numbers.push(55)
numbers.push(55)
const currentNumber = [...numbers, 45]

// Create an new array from an older array and an element
console.log(numbers)
console.log(newNumber)
console.log(currentNumber)