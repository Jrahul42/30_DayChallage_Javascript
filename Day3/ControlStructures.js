// Tasks/Activities:
// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let Number = 4
 if (Number > 0){
    console.log("Number is Positive");
 }
 else if (Number < 0){
    console.log("Number is Negative");
 }
 else if (Number == 0){
    console.log("Number is Zero");
 }else{
    console.log("wrong Number");
 }

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let Age = 17

if (Age>=18){
    console.log("You are Eligible");
}else{
    console.log("Your not Eligible");
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let NumOne = 1
let NumTwo = 16
let NumThree = 16

if (NumOne > NumTwo && NumOne > NumThree){
    console.log("NumOne is Greater");
}else{
    if(NumTwo > NumOne && NumTwo > NumThree){
        console.log("NumTwo is Greater");
    }
else{
    console.log("NumThree is Greater or equal to others");
}
}
// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let Day = 8
switch (Day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Tharsday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satarday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not Match");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 90
switch (score) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("E");
        break;
    case 40:
        console.log("F");
        break;
    default:
        console.log("Invalid Input");
        break;
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let Num = 7
let CheckNum = Num%2==0 ? "even" : "odd"
 console.log(`The Number you Enter is :${CheckNum}`);

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let Year = 2023
if (Year % 4 == 0 && Year % 100 !== 0 || Year % 400 == 0){
    console.log("The Year is Leap Year");
}else{
    console.log("Year is not a leap year");
}

// Feature Request:
// Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
let num = 6
 if (num > 0){
    console.log("Number is Positive");
 }
 else if (num < 0){
    console.log("Number is Negative");
 }
 else if (num == 0){
    console.log("Number is Zero");
 }else{
    console.log("wrong Number");
 }

//  Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
let NewAge = 17

if (NewAge>=18){
    console.log("You are Eligible");
}else{
    console.log("Your not Eligible");
}

// Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
let NewDay = 8
switch (NewDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Tharsday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satarday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not Match");
        break;
}

// Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let Newscore = 90
switch (Newscore) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("E");
        break;
    case 40:
        console.log("F");
        break;
    default:
        console.log("Invalid Input");
        break;
}

// Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
let NewYear = 2023
if (NewYear % 4 == 0 && NewYear % 100 !== 0 || NewYear % 400 == 0){
    console.log("The Year is Leap Year");
}else{
    console.log("Year is not a leap year");
}


// In this challange of Day 4 (control structure), I have learn how to use If-else statement, how to use nested if else statment using conditions. how to chek different condintion using true and false. I have also learn switch case,Ternary operator. I have made 5 features in this challange 1)Even odd Num checker 2) Age validity checker 3)Day assignment using input numbers 4)Grade aaignment script 5)Leap year check script. I have enjoyed this challange very much