let number = 40;
if (number > 40 && number < 40 || number === 40) {
    console.log('this number  is Valid')
} else {
    console.log('This Number is Not Valid')
}

let Marks = 79;
if (Marks >= 80) {
    console.log('He gets A+')
} else if (Marks >= 70 && Marks < 80) {
    console.log('He gets A')
} else if (Marks >= 60 && Marks < 70) {
    console.log('He gets A-')
} else if (Marks >= 50 && Marks < 60) {
    console.log('He gets B')
} else if (Marks >= 40 && Marks < 50) {
    console.log('He gets C')
} else if (Marks >= 33 && Marks > 40) {
    console.log('He gets D')
} else {
    console.log('He Gets Fail in The Exam')
}