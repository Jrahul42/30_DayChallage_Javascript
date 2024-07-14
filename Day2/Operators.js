// Tasks/Activities:
// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

let firstNumber = 5
let secondNumber = 6
console.log(firstNumber + secondNumber);

//Task 2: Write a program to subtract two numbers and log the result to the console.

console.log(firstNumber - secondNumber);

//Task 3: Write a program to multiply two numbers and log the result to the console.

console.log(firstNumber * secondNumber);

//Task 4: Write a program to divide two numbers and log the result to the console.

console.log(firstNumber / secondNumber);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

console.log(firstNumber % secondNumber);

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let thirdNumber = 8
thirdNumber += firstNumber
console.log(thirdNumber);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let fourthNumber = 9
fourthNumber -= secondNumber
console.log(fourthNumber);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let score1 = 5
let score2 = 8
console.log(score1 > score2);
console.log(score1 < score2);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

console.log(score1 >= score2);
console.log(score2 <= score1);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(score1 == score2);
console.log(score1 === score2);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

console.log(score1 < score2 && score2 > score1);

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log( score1 > score2 || score2 < score1);

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(score1 != score2);

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

const Number = -5
const check = Number>=0 ? "Positive" : "Negative";
console.log(check); 


//Feature Request:
//Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let Number1 = 54
let Number2 = 6

console.log(Number1 + Number2);
console.log(Number1 - Number2);
console.log(Number1 * Number2);
console.log(Number1 / Number2);
console.log(Number1 % Number2);

//Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

console.log(Number1 <= Number2 && Number1 != Number2);
console.log(Number1 > Number2 || Number2 === Number1);

//Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let Num = 78
let check_Num = Num>=0 ? "Positive" : "Negative";
console.log(check_Num); 
