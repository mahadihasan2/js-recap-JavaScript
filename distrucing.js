const numbers = [40, 30];
// const x = numbers[0]
// const y = numbers[1]
const [x, y] = [50, 60]
console.log(x, y)
function addNumber(num1, num2) {
    const nums = [num1, num2]
    return nums

}
console.log(addNumber(40, 56));

// object Destruching 
const office = {
    name: 'BariDara 1 Number Road',
    Employer: 50,
    Work: {
        Employer1: 'Web Developer',
        Employer2: 'Digital Marketing',
        Employer3: 'Seo Expert'

    },