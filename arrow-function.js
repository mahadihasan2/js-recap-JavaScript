const addNumber = () => 45;
const number = addNumber()
console.log(number)

// Using one Parameter 
const OneParameter = num1 => num1 + 50;
console.log(OneParameter(50))

// Using parameter 
const twoParameter = (num1, num2) => num1 + num2
console.log(twoParameter(60, 40))
// Multi Line Arrow Function
const multiLine = (number2, number3) => {
    const sum = number2 + number3;
    return sum;
}
const result = multiLine(32, 44)
console.log(result)