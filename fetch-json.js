const student = {
    name: 'Hamid Khan',
    age: 32,
    salary: 400,
    designetion: 'Web-Developer'
}
const studentJson = JSON.stringify(student)
console.log(student)
console.log(studentJson);
const studentObj = JSON.parse(studentJson)
console.log(studentObj)

// Fetch Using 
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// Keys and Value 
const keys = Object.keys(student)
console.log(keys)
const values = Object.values(student)
console.log(values)
// Using for loop 
const numbers = [39, 50, 44, 32, 12]
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2)
console.log(numbers)
